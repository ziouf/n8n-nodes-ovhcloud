/**
 * @brief Dynamic list search for VIP services
 *
 * Retrieves available VIP service names from the OVH API for dynamic
 * dropdown selection. Used by n8n to populate VIP service lists when
 * configuring VIP-related operations.
 *
 * HTTP method: GET
 * Endpoint: /vip
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing VIP service names with name-value pairs for n8n dropdowns
 * @see {@link getStackServices} - Similar method for Stack MIS services
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'vip1', value: 'vip1' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getVipServices(this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/vip')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
