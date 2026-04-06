/**
 * @brief Dynamic list search for Dedicated Cluster services
 *
 * Retrieves available Dedicated Cluster service names from the OVH API for dynamic dropdown selection.
 * Used by n8n to populate Dedicated Cluster lists when configuring Dedicated Cluster-related operations.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/cluster
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing Dedicated Cluster service names with name-value pairs for n8n dropdowns
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'cluster1234567', value: 'cluster1234567' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getDedicatedClusterServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dedicated/cluster`)) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
