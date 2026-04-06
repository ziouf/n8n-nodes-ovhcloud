/**
 * @brief Dynamic list search for Dedicated Cloud services
 *
 * Retrieves available dedicated cloud service names from the OVH API for dynamic dropdown selection.
 * Used by n8n to populate dedicated cloud lists when configuring dedicated cloud-related operations.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing dedicated cloud service names with name-value pairs for n8n dropdowns
 */
import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getDedicatedCloudServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicatedCloud')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
