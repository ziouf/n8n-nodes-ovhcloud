/**
 * @brief Dynamic list search for Horizon View services
 *
 * Retrieves available Horizon View service names from the OVH API for dynamic
 * dropdown selection. Used by n8n to populate Horizon View service lists when
 * configuring Horizon View-related operations.
 *
 * HTTP method: GET
 * Endpoint: /horizonView
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing Horizon View service names with name-value pairs for n8n dropdowns
 * @see {@link getMetricsServices} - Similar method for Metrics services
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'service1', value: 'service1' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getHorizonViewServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/horizonView')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
