/**
 * @brief Dynamic list search for OVH service IDs
 *
 * Retrieves available service IDs for a given service type from the OVH API.
 * Used by n8n to populate dropdown options when users need to select a specific
 * service instance (e.g., selecting a VPS, web hosting, or domain service).
 *
 * The service type is determined by the `svcType` parameter (e.g., `/vps`, `/hosting/web`, `/domain`).
 *
 * HTTP method: GET
 * Endpoint: /services
 * Query parameters:
 * - routes: Service route filter
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
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getServiceIds(this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const type = this.getNodeParameter('svcType', 0, { extractValue: true }) as string;

	const serviceIds = (await client.httpGet(`/services`, { routes: type })) as string[];
	return {
		results: serviceIds.map((id: string) => ({ name: id, value: id })),
	};
}
