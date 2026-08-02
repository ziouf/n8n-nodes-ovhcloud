/**
 * @brief Dynamic list search for Freefax line accounts
 *
 * Retrieves available Freefax line account service names from the OVH API for
 * dynamic dropdown selection. Used by n8n to populate Freefax service lists
 * when configuring Freefax-related operations.
 *
 * HTTP method: GET
 * Endpoint: /freefax
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing Freefax service names with name-value pairs for n8n dropdowns
 * @see {@link getVpsServices} - Similar method for VPS services
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'fr12345-ovh', value: 'fr12345-ovh' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getFreefaxServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/freefax')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
