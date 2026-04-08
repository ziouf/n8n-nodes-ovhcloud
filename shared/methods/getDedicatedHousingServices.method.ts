/**
 * @brief Dynamic list search for Dedicated Housing services
 *
 * Retrieves available Dedicated Housing service names from the OVH API for dynamic dropdown selection.
 * Used by n8n to populate Dedicated Housing lists when configuring Dedicated Housing-related operations.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing Dedicated Housing service names with name-value pairs for n8n dropdowns
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'housing1234567', value: 'housing1234567' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getDedicatedHousingServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/housing')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
