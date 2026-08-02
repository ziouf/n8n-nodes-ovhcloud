/**
 * @brief Dynamic list search for Metrics services
 *
 * Retrieves available Metrics service names from the OVH API for dynamic
 * dropdown selection. Used by n8n to populate Metrics service lists when
 * configuring Metrics-related operations.
 *
 * HTTP method: GET
 * Endpoint: /metrics
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing Metrics service names with name-value pairs for n8n dropdowns
 * @see {@link getVipServices} - Similar method for VIP services
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'metrics-12345', value: 'metrics-12345' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getMetricsServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/metrics')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
