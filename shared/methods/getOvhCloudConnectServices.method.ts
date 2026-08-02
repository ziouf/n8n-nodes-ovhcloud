/**
 * @brief Dynamic list search for OvhCloudConnect services
 *
 * Retrieves available OvhCloudConnect services service names from the OVH API for
 * dynamic dropdown selection. Used by n8n to populate OVH Cloud OvhCloudConnect service lists
 * when configuring OVH Cloud OvhCloudConnect-related operations.
 *
 * HTTP method: GET
 * Endpoint: /ovhCloudConnect
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing service names with name-value pairs for n8n dropdowns
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'ovhcloudconnect-12345', value: 'ovhcloudconnect-12345' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getOvhCloudConnectServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/ovhCloudConnect')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
