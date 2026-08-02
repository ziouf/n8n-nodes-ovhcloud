/**
 * @brief Dynamic list search for Nutanix clusters
 *
 * Retrieves available Nutanix clusters service names from the OVH API for
 * dynamic dropdown selection. Used by n8n to populate OVH Cloud Nutanix service lists
 * when configuring OVH Cloud Nutanix-related operations.
 *
 * HTTP method: GET
 * Endpoint: /nutanix
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing service names with name-value pairs for n8n dropdowns
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'nutanix-12345', value: 'nutanix-12345' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getNutanixServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/nutanix')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
