/**
 * @brief Dynamic list search for Public Cloud Projects (GET only)
 *
 * Retrieves available public cloud project IDs from the OVH API v2 for dynamic dropdown selection.
 * Used by n8n to populate project lists when configuring public cloud-related operations.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing public cloud project IDs with name-value pairs for n8n dropdowns
 */
import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getPublicCloudProjects(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/publicCloud/project')) as string[];
	return { results: data.map((project: string) => ({ name: project, value: project })) };
}
