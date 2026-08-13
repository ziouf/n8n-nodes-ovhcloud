import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient, getClient } from '../transport/ApiClient';

/** Default cache TTL: 5 minutes. */
const DEFAULT_CACHE_TTL_MS = 5 * 60 * 1000;

/** Cached list-search result entry. */
interface CachedList {
	timestamp: number;
	data: unknown[];
}

/** Module-level TTL cache scoped by credential. */
const listSearchCache = new Map<string, CachedList>();

/**
 * Clears the module-level list-search cache.
 * Useful in tests to force fresh API calls.
 */
export function clearListSearchCache(): void {
	listSearchCache.clear();
}

/**
 * Minimal context interface for list-search loaders.
 *
 * In production, `this` is `ILoadOptionsFunctions`. In tests, it's a
 * minimal mock. This union keeps both paths type-safe without casts.
 */
export type ListSearchContext = ILoadOptionsFunctions | ProjectIdContext;

/**
 * A list-search loader bound to a fixed OVH API route.
 *
 * n8n passes the user's typed text as `filter` and, when the user pages
 * in the dropdown, the `paginationToken` returned by a previous call.
 */
export type ListSearchLoader = (
	this: ListSearchContext,
	filter?: string,
	paginationToken?: string,
) => Promise<INodeListSearchResult>;

/**
 * Options for configuring list-search loaders.
 */
export interface ListSearchOptions {
	/** Transform the display name of an item (value stays the raw id). */
	map?: (id: string) => string;
	/** Maximum items to fetch per page when paginating (default 1000). */
	maxItems?: number;
	/** Field name used for client-side filtering (n8n passes the typed text). */
	filterField?: string; // default 'filter'
	/** Property of the result item to filter on (default 'name'). */
	filterProperty?: string;
	/** Cache TTL in milliseconds (default 300000). Set `0` to disable caching. */
	cacheTtlMs?: number;
	/** Sort results client-side (default true). */
	sort?: boolean;
	/** Key to sort on (default 'name'). */
	sortKey?: 'name' | 'value';
}

/**
 * Minimal interface for the context used by resolveProjectId.
 *
 * Only requires `getNodeParameter` so that tests can pass a minimal mock
 * without needing a full `ILoadOptionsFunctions` implementation.
 */
export interface ProjectIdContext {
	getNodeParameter: (name: string, itemIndex: number) => unknown;
}

/**
 * Reads the `publicCloudProjectId` node parameter, handling both the plain
 * string form and the `{ mode, value }` resourceLocator form used by n8n.
 *
 * @param ctx - The n8n load-options context (or a minimal mock)
 * @param paramName - Parameter to read (default: 'publicCloudProjectId')
 * @returns The resolved project id string
 * @throws Error when the parameter is not a valid string/object
 */
export function resolveProjectId(
	ctx: ProjectIdContext,
	paramName = 'publicCloudProjectId',
): string {
	const paramValue = ctx.getNodeParameter(paramName, 0) as string | Record<string, unknown>;

	if (typeof paramValue === 'string' && paramValue !== '') {
		return paramValue;
	}

	if (typeof paramValue === 'object' && paramValue !== null) {
		const value = (paramValue as Record<string, unknown>).value;
		if (typeof value === 'string' && value !== '') {
			return value;
		}
	}

	throw new Error(`${paramName} parameter is not a valid string`);
}

/**
 * Retrieves the n8n filter text from node parameters.
 *
 * Safely returns an empty string when the parameter does not exist or
 * throws (n8n only declares it on list-search operations that support it).
 *
 * @param ctx - The n8n load-options context
 * @param filterField - Name of the parameter to read (default: 'filter')
 * @returns The filter text, or empty string
 */
export function getSearchFilter(ctx: ProjectIdContext, filterField = 'filter'): string {
	try {
		return (ctx.getNodeParameter(filterField, 0) as string) ?? '';
	} catch {
		return '';
	}
}

/**
 * Internal indexable type for list-search result items.
 * Allows filtering on any string key (e.g. 'name' or a custom filterProperty).
 */
interface ListSearchResultItem {
	name: string;
	value: string;
	[key: string]: unknown;
}

/**
 * Builds the `{ name, value }` result array from raw data, applying
 * mapping and client-side filtering.
 *
 * @param data - Raw items returned by the API (usually strings / IDs)
 * @param options - Optional configuration (mapping, filter property)
 * @param filter - Client-side filter text (empty string = no filtering)
 * @param paginationToken - Optional cursor token to include in the result
 * @returns An `INodeListSearchResult` ready for n8n dropdowns
 */
export function buildListSearchResults(
	data: unknown[],
	options: ListSearchOptions | undefined,
	filter: string,
	paginationToken?: string,
): INodeListSearchResult {
	let results: ListSearchResultItem[] = data.map((id) => {
		const name = options?.map ? options.map(String(id)) : String(id);
		return { name, value: String(id) };
	});

	// Sort before filtering so the filtered subset remains in sorted order.
	if (options?.sort ?? true) {
		const sortKey = options?.sortKey ?? 'name';
		results.sort((a, b) =>
			String(a[sortKey]).localeCompare(String(b[sortKey]), undefined, { sensitivity: 'base' }),
		);
	}

	if (filter) {
		const prop = options?.filterProperty ?? 'name';
		const lower = filter.toLowerCase();
		results = results.filter((r) => {
			const val = r[prop] ?? '';
			return String(val).toLowerCase().includes(lower);
		});
	}

	const result: INodeListSearchResult = { results };
	if (paginationToken !== undefined && paginationToken !== '') {
		result.paginationToken = paginationToken;
	}
	return result;
}

/**
 * Parses a cursor string into an integer offset.
 * Returns 0 for NaN / empty / missing values.
 */
function parseCursor(token: string | undefined): number {
	if (token === undefined || token === '') return 0;
	const parsed = parseInt(token, 10);
	return isNaN(parsed) ? 0 : parsed;
}

/**
 * Loads items via pagination and applies mapping / filtering.
 *
 * Results are cached per `(scope, route, offset)` with a configurable TTL.
 *
 * **Initial page (no paginationToken):** fetches `maxItems + 1` to detect
 * truncation, pops the probe item, and returns a real cursor token when
 * the page was full so the user can page through all results.
 *
 * **Subsequent pages (paginationToken present):** fetches exactly
 * `maxItems` items starting at the cursor offset; returns a new cursor
 * only when that page was full.
 *
 * @param client - The OVH API client
 * @param scope - Credential-scoped cache key prefix
 * @param route - API route to query
 * @param options - Optional configuration (pagination, mapping, filtering)
 * @param filter - Client-side filter text
 * @param paginationToken - Optional cursor token (page offset)
 * @returns An `INodeListSearchResult` ready for n8n dropdowns
 */
async function loadAndMapResults(
	client: ApiClient,
	scope: string,
	route: string,
	options: ListSearchOptions | undefined,
	filter: string,
	paginationToken?: string,
): Promise<INodeListSearchResult> {
	const ttlMs = options?.cacheTtlMs ?? DEFAULT_CACHE_TTL_MS;
	const maxItems = options?.maxItems ?? 1000;

	// --- Pagination branch: real cursor provided ---
	if (paginationToken !== undefined && paginationToken !== '') {
		const offset = parseCursor(paginationToken);
		const cacheKey = `${scope}|${route}|${offset}`;

		// Cache hit with valid TTL — apply filter on cached raw data
		if (ttlMs > 0) {
			const cached = listSearchCache.get(cacheKey);
			if (cached && Date.now() - cached.timestamp < ttlMs) {
				return buildListSearchResults(cached.data, options, filter, paginationToken);
			}
		}

		// Fetch exactly maxItems at offset (no probe)
		const data = await client.paginate<string>(route, { maxItems, offset });

		// Cache the raw page
		if (ttlMs > 0) {
			listSearchCache.set(cacheKey, { timestamp: Date.now(), data });
		}

		// Return next cursor only when the page was full
		const nextToken = data.length === maxItems ? String(offset + data.length) : undefined;
		return buildListSearchResults(data, options, filter, nextToken);
	}

	// --- Initial page branch: offset 0, probe for truncation ---
	const cacheKey = `${scope}|${route}|0`;

	// Cache hit with valid TTL — apply filter on cached raw data
	if (ttlMs > 0) {
		const cached = listSearchCache.get(cacheKey);
		if (cached && Date.now() - cached.timestamp < ttlMs) {
			return buildListSearchResults(cached.data, options, filter);
		}
	}

	// Fetch maxItems + 1 to detect truncation
	const data = await client.paginate<string>(route, { maxItems: maxItems + 1 });

	// If we got maxItems + 1, the last item is the probe — pop it
	let truncated = false;
	if (data.length > maxItems) {
		data.pop();
		truncated = true;
	}

	// Cache the raw items (without probe)
	if (ttlMs > 0) {
		listSearchCache.set(cacheKey, { timestamp: Date.now(), data });
	}

	// Include real cursor token only when truncated
	const cursorToken = truncated ? String(maxItems) : undefined;
	return buildListSearchResults(data, options, filter, cursorToken);
}

/**
 * Creates a dynamic list-search loader for a fixed OVH API route.
 *
 * The loader paginates the given route, maps each returned id to an
 * `{ name, value }` pair and normalizes non-string ids (e.g. numeric
 * ticket ids) to strings for n8n dropdowns.
 *
 * @param route - The API route to query (e.g. '/vps', '/domain')
 * @param options - Optional configuration (pagination, mapping, filtering)
 * @returns An n8n-compatible list-search function
 *
 * @example
 * ```typescript
 * const getVpsServices = createServiceListSearch('/vps');
 * ```
 */
export function createServiceListSearch(
	route: string,
	options?: ListSearchOptions,
): ListSearchLoader {
	return async function (
		this: ListSearchContext,
		filterArg?: string,
		paginationToken?: string,
	): Promise<INodeListSearchResult> {
		const client = getClient(this as ILoadOptionsFunctions);
		const scope = await client.getCredentialScope();
		const filter =
			filterArg !== undefined && filterArg !== ''
				? filterArg
				: getSearchFilter(this, options?.filterField);
		return loadAndMapResults(client, scope, route, options, filter, paginationToken);
	};
}

/**
 * Creates a project-scoped list-search loader, resolving `projectId` from the
 * `publicCloudProjectId` node parameter before querying.
 *
 * @param buildRoute - Function building the API route from the project id
 * @param paramName - Parameter to read (default: 'publicCloudProjectId')
 * @param options - Optional configuration (pagination, mapping, filtering)
 * @returns An n8n-compatible list-search function
 *
 * @example
 * ```typescript
 * const getVolumes = createProjectScopedServiceListSearch(
 *   (projectId) => `/publicCloud/project/${projectId}/blockStorage/volume`,
 * );
 * ```
 */
export function createProjectScopedServiceListSearch(
	buildRoute: (projectId: string) => string,
	paramName?: string,
	options?: ListSearchOptions,
): ListSearchLoader {
	return async function (
		this: ListSearchContext,
		filterArg?: string,
		paginationToken?: string,
	): Promise<INodeListSearchResult> {
		const client = getClient(this as ILoadOptionsFunctions);
		const scope = await client.getCredentialScope();
		const projectId = resolveProjectId(this, paramName);
		const filter =
			filterArg !== undefined && filterArg !== ''
				? filterArg
				: getSearchFilter(this, options?.filterField);
		return loadAndMapResults(
			client,
			scope,
			buildRoute(projectId),
			options,
			filter,
			paginationToken,
		);
	};
}
