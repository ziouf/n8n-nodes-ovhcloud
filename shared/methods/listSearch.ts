import type { IDataObject, ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

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
	const paramValue = ctx.getNodeParameter(paramName, 0) as IDataObject | string;

	if (typeof paramValue === 'string' && paramValue !== '') {
		return paramValue;
	}

	if (typeof paramValue === 'object' && paramValue !== null) {
		const value = (paramValue as IDataObject).value;
		if (typeof value === 'string' && value !== '') {
			return value;
		}
	}

	throw new Error(`${paramName} parameter is not a valid string`);
}

/** A list-search loader bound to a fixed OVH API route. */
export type ListSearchLoader = (this: ILoadOptionsFunctions) => Promise<INodeListSearchResult>;

/**
 * Creates a dynamic list-search loader for a fixed OVH API route.
 *
 * The loader GETs the given route, maps each returned id to an
 * `{ name, value }` pair and normalizes non-string ids (e.g. numeric
 * ticket ids) to strings for n8n dropdowns.
 *
 * @param route - The API route to query (e.g. '/vps', '/domain')
 * @returns An n8n-compatible list-search function
 *
 * @example
 * ```typescript
 * const getVpsServices = createServiceListSearch('/vps');
 * ```
 */
export function createServiceListSearch(route: string): ListSearchLoader {
	return async function (this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
		const client = new ApiClient(this);
		const data = (await client.httpGet(route)) as unknown[];
		return {
			results: data.map((id) => ({ name: String(id), value: String(id) })),
		};
	};
}

/**
 * Creates a project-scoped list-search loader, resolving `projectId` from the
 * `publicCloudProjectId` node parameter before querying.
 *
 * @param buildRoute - Function building the API route from the project id
 * @param paramName - Parameter to read (default: 'publicCloudProjectId')
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
	paramName = 'publicCloudProjectId',
): ListSearchLoader {
	return async function (this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
		const client = new ApiClient(this);
		const projectId = resolveProjectId(this, paramName);
		const data = (await client.httpGet(buildRoute(projectId))) as unknown[];
		return {
			results: data.map((id) => ({ name: String(id), value: String(id) })),
		};
	};
}
