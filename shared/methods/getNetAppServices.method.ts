/**
 * @brief Dynamic list search for NetApp storage services
 *
 * Retrieves available NetApp service names (uuids) from the OVH API for dynamic
 * dropdown selection. Used by n8n to populate service lists when configuring
 * OvhCloudStorage operations.
 *
 * HTTP method: GET
 * Endpoint: /storage/netapp
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing NetApp service names with name-value pairs for n8n dropdowns
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'aaaa-bbbb-cccc-dddd', value: 'aaaa-bbbb-cccc-dddd' }, ...]
 */
import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getNetAppServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/storage/netapp')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
