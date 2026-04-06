/**
 * @brief Dynamic list search for Dedicated Server services
 *
 * Retrieves available dedicated server service names from the OVH API for dynamic dropdown selection.
 * Used by n8n to populate dedicated server lists when configuring dedicated server-related operations.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing dedicated server service names with name-value pairs for n8n dropdowns
 */
import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getDedicatedServerServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/server')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
