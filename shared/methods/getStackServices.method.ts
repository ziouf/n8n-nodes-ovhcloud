/**
 * @brief Dynamic list search for Stack MIS services
 *
 * Retrieves available Stack MIS service names from the OVH API for dynamic
 * dropdown selection. Used by n8n to populate Stack MIS service lists when
 * configuring Stack-related operations.
 *
 * HTTP method: GET
 * Endpoint: /stack/mis
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing Stack MIS service names with name-value pairs for n8n dropdowns
 * @see {@link getVipServices} - Similar method for VIP services
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'mis-12345', value: 'mis-12345' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getStackServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/stack/mis')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
