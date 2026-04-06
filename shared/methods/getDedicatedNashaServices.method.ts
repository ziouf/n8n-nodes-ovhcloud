/**
 * @brief Dynamic list search for Dedicated Nasha services
 *
 * Retrieves available Dedicated Nasha service names from the OVH API for dynamic dropdown selection.
 * Used by n8n to populate Dedicated Nasha lists when configuring Dedicated Nasha-related operations.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing Dedicated Nasha service names with name-value pairs for n8n dropdowns
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'nasha1234567', value: 'nasha1234567' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getDedicatedNashaServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dedicated/nasha`)) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
