/**
 * @brief Dynamic list search for Office SaaS CSP2 services
 *
 * Retrieves available Office SaaS CSP2 service names from the OVH API for
 * dynamic dropdown selection. Used by n8n to populate OVH Cloud SaaS CSP2 service lists
 * when configuring OVH Cloud SaaS CSP2-related operations.
 *
 * HTTP method: GET
 * Endpoint: /saas/csp2
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing service names with name-value pairs for n8n dropdowns
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'csp2-12345', value: 'csp2-12345' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getSaasCsp2Services(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/saas/csp2')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
