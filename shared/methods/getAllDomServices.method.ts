/**
 * @brief Dynamic list search for AllDom services
 *
 * Retrieves available AllDom service names from the OVH API for dynamic dropdown selection.
 * Used by n8n to populate AllDom service lists when configuring AllDom-related operations.
 *
 * HTTP method: GET
 * Endpoint: /allDom
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing AllDom service names with name-value pairs for n8n dropdowns
 * @see {@link getServiceIds} - Similar method for service IDs
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'alldom1234567', value: 'alldom1234567' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getAllDomServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/allDom`)) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
