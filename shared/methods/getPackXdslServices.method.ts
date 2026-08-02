/**
 * @brief Dynamic list search for Pack Xdsl services
 *
 * Retrieves available Pack Xdsl service names from the OVH API for dynamic
 * dropdown selection. Used by n8n to populate Pack Xdsl service lists when
 * configuring Pack Xdsl-related operations.
 *
 * HTTP method: GET
 * Endpoint: /pack/xdsl
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing Pack Xdsl service names with name-value pairs for n8n dropdowns
 * @see {@link getXdslServices} - Similar method for Xdsl services
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'packabcd-ovh', value: 'packabcd-ovh' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getPackXdslServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/pack/xdsl')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
