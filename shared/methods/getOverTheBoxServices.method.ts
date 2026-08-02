/**
 * @brief Dynamic list search for OverTheBox services
 *
 * Retrieves available OverTheBox services service names from the OVH API for
 * dynamic dropdown selection. Used by n8n to populate OVH Cloud OverTheBox service lists
 * when configuring OVH Cloud OverTheBox-related operations.
 *
 * HTTP method: GET
 * Endpoint: /overTheBox
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing service names with name-value pairs for n8n dropdowns
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'overthebox-12345', value: 'overthebox-12345' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getOverTheBoxServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/overTheBox')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
