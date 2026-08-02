/**
 * @brief Dynamic list search for WorkLight licenses
 *
 * Retrieves available WorkLight license service names from the OVH API for
 * dynamic dropdown selection. Used by n8n to populate WorkLight license lists
 * when configuring license-related operations.
 *
 * HTTP method: GET
 * Endpoint: /license/worklight
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing WorkLight license service names with name-value pairs for n8n dropdowns
 * @see {@link getVpsServices} - Similar method for VPS services
 *
 * @example
 * // In n8n UI configuration:
 * // Output: [{ name: 'license-1', value: 'license-1' }, ...]
 */
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getWorkLightLicenses(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/license/worklight')) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}
