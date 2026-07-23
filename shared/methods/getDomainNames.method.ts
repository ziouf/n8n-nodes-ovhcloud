/**
 * @brief Dynamic list search for domain names
 *
 * Retrieves available domain names from the OVH API for dynamic dropdown selection.
 * Used by n8n to populate domain lists when configuring Domain-related operations.
 *
 * HTTP method: GET
 * Endpoint: /domain
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing domain names with name-value pairs for n8n dropdowns
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getDomainNames(this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/domain')) as string[];
	return { results: data.map((name) => ({ name, value: name })) };
}
