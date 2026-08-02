/**
 * @brief Dynamic list search for Veeam Cloud Connect services
 *
 * Retrieves available Veeam Cloud Connect services service names from the OVH API for
 * dynamic dropdown selection. Used by n8n to populate OVH Cloud Veeam Cloud Connect service lists
 * when configuring OVH Cloud Veeam Cloud Connect-related operations.
 *
 * HTTP method: GET
 * Endpoint: /veeamCloudConnect
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing service names with name-value pairs for n8n dropdowns
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'vcc-12345', value: 'vcc-12345' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getVeeamCloudConnectServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/veeamCloudConnect')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
