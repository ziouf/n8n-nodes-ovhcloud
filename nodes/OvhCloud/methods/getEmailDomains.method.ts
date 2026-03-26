/**
 * @brief Dynamic list search for email domains
 *
 * Retrieves available email domain names from the OVH API for dynamic dropdown selection.
 * Used by n8n to populate domain lists when configuring email-related operations.
 *
 * HTTP method: GET
 * Endpoint: /email/domain
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing domain names with name-value pairs for n8n dropdowns
 * @see {@link getServiceIds} - Similar method for service IDs
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'example.com', value: 'example.com' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getEmailDomains(this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const results = (await client.httpGet('/email/domain')) as string[];
	return { results: results.map((domain: string) => ({ name: domain, value: domain })) };
}
