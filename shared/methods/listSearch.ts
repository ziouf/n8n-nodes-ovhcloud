import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

/**
 * A list-search loader bound to a fixed OVH API route.
 */
export type ListSearchLoader = (this: ILoadOptionsFunctions) => Promise<INodeListSearchResult>;

/**
 * Options for configuring list-search loaders.
 */
export interface ListSearchOptions {
	/** Transform the display name of an item (value stays the raw id). */
	map?: (id: string) => string;
	/** Maximum items to fetch when paginating (default 1000). */
	maxItems?: number;
	/** Field name used for client-side filtering (n8n passes the typed text). */
	filterField?: string; // default 'filter'
	/** Property of the result item to filter on (default 'name'). */
	filterProperty?: string;
}

/**
 * Reads the `publicCloudProjectId` node parameter, handling both the plain
 * string form and the `{ mode, value }` resourceLocator form used by n8n.
 *
 * @param ctx - The n8n load-options context
 * @param paramName - Parameter to read (default: 'publicCloudProjectId')
 * @returns The resolved project id string
 * @throws Error when the parameter is not a valid string/object
 */
export function resolveProjectId(
	ctx: ILoadOptionsFunctions,
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
export function getSearchFilter(ctx: ILoadOptionsFunctions, filterField = 'filter'): string {
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
 * @returns An `INodeListSearchResult` ready for n8n dropdowns
 */
export function buildListSearchResults(
	data: unknown[],
	options: ListSearchOptions | undefined,
	filter: string,
): INodeListSearchResult {
	let results: ListSearchResultItem[] = data.map((id) => {
		const name = options?.map ? options.map(String(id)) : String(id);
		return { name, value: String(id) };
	});

	if (filter) {
		const prop = options?.filterProperty ?? 'name';
		const lower = filter.toLowerCase();
		results = results.filter((r) => {
			const val = r[prop] ?? '';
			return String(val).toLowerCase().includes(lower);
		});
	}

	return { results };
}

/**
 * Loads items via pagination and applies mapping / filtering.
 */
async function loadAndMapResults(
	client: ApiClient,
	route: string,
	options: ListSearchOptions | undefined,
	filter: string,
): Promise<INodeListSearchResult> {
	const data = await client.paginate<string>(route, {
		maxItems: options?.maxItems ?? 1000,
	});

	return buildListSearchResults(data, options, filter);
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
	return async function (this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
		const client = new ApiClient(this);
		const filter = getSearchFilter(this, options?.filterField);
		return loadAndMapResults(client, route, options, filter);
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
	return async function (this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
		const client = new ApiClient(this);
		const projectId = resolveProjectId(this, paramName);
		const filter = getSearchFilter(this, options?.filterField);
		return loadAndMapResults(client, buildRoute(projectId), options, filter);
	};
}
