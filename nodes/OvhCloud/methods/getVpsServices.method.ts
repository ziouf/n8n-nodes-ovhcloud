/**
 * @brief Dynamic list search for VPS services
 *
 * Retrieves available VPS service names from the OVH API for dynamic dropdown selection.
 * Used by n8n to populate VPS lists when configuring VPS-related operations.
 *
 * HTTP method: GET
 * Endpoint: /vps
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing VPS service names with name-value pairs for n8n dropdowns
 * @see {@link getServiceIds} - Similar method for service IDs
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'vps1234567', value: 'vps1234567' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getVpsServices(this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/vps`)) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
