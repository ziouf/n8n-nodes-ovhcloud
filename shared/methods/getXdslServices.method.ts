/**
 * @brief Dynamic list search for Xdsl services
 *
 * Retrieves available Xdsl services service names from the OVH API for
 * dynamic dropdown selection. Used by n8n to populate OVH Cloud Xdsl service lists
 * when configuring OVH Cloud Xdsl-related operations.
 *
 * HTTP method: GET
 * Endpoint: /xdsl
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing service names with name-value pairs for n8n dropdowns
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'xdsl-12345', value: 'xdsl-12345' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getXdslServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/xdsl')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
