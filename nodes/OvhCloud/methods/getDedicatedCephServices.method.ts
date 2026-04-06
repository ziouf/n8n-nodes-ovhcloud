/**
 * @brief Dynamic list search for Dedicated Ceph services
 *
 * Retrieves available Dedicated Ceph service names from the OVH API for dynamic dropdown selection.
 * Used by n8n to populate Dedicated Ceph lists when configuring Dedicated Ceph-related operations.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing Dedicated Ceph service names with name-value pairs for n8n dropdowns
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'ceph-xxxxx', value: 'ceph-xxxxx' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getDedicatedCephServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/ceph')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
