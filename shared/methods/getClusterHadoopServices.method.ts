/**
 * @brief Dynamic list search for Cluster Hadoop services
 *
 * Retrieves available Cluster Hadoop service names from the OVH API for dynamic
 * dropdown selection. Used by n8n to populate Cluster Hadoop service lists when
 * configuring Cluster Hadoop-related operations.
 *
 * HTTP method: GET
 * Endpoint: /cluster/hadoop
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing Cluster Hadoop service names with name-value pairs for n8n dropdowns
 * @see {@link getHorizonViewServices} - Similar method for Horizon View services
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'cluster-12345', value: 'cluster-12345' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getClusterHadoopServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/cluster/hadoop')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
