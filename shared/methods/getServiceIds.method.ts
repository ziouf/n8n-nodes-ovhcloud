import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';
import { buildListSearchResults, getSearchFilter } from './listSearch';

/**
 * @brief Dynamic list search for OVH service IDs filtered by route.
 *
 * Retrieves available service IDs for a given service type from the OVH API.
 * Used by n8n to populate dropdown options when users need to select a specific
 * service instance (e.g., selecting a VPS, web hosting, or domain service).
 *
 * The service type is determined by the `svcType` parameter (e.g., `/vps`, `/hosting/web`, `/domain`).
 * The method paginates the `/services` endpoint with a `routes` query parameter,
 * maps each returned ID to an `{ name, value }` pair, and applies client-side filtering.
 *
 * HTTP method: GET
 * Endpoint: /services
 * Query parameters:
 * - routes: Service route filter (derived from `svcType`)
 *
 * @param this - n8n ILoadOptionsFunctions context for accessing node parameters
 * @returns INodeListSearchResult containing service IDs with name-value pairs for n8n dropdowns
 * @see {@link getEmailDomains} - Similar method for email domains
 * @see {@link getVpsServices} - VPS-specific service list search
 *
 * @example
 * // In n8n UI configuration:
 * // svcType = '/vps'
 * // Output: [{ name: 'vps123456', value: 'vps123456' }, ...]
 */
export async function getServiceIds(this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const type = this.getNodeParameter('svcType', 0, { extractValue: true }) as string;

	const data = await client.paginate<string>('/services', {
		maxItems: 1000,
		query: { routes: type },
	});

	const filter = getSearchFilter(this);
	return buildListSearchResults(data, undefined, filter);
}
