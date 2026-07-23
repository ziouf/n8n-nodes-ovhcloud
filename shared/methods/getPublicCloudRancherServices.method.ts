/**
 * @brief Dynamic list search for Public Cloud Rancher Services (GET only)
 *
 * Retrieves available Rancher service IDs from the OVH API v2 for dynamic dropdown selection.
 * Used by n8n to populate rancher service lists when configuring public cloud-related operations.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/rancher (returns array of service UUIDs)
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing rancher service IDs with name-value pairs for n8n dropdowns
 */
import type { IDataObject, ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getPublicCloudRancherServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const projectUrl = this.getNodeParameter('publicCloudProjectId', 0) as string;
	let projectId: string;

	if (typeof projectUrl === 'string') {
		projectId = projectUrl;
	} else if (
		(projectUrl as IDataObject).value !== undefined &&
		(projectUrl as IDataObject).mode === 'list'
	) {
		projectId = (projectUrl as IDataObject).value as string;
	} else {
		throw new Error('publicCloudProjectId parameter is not a valid string');
	}

	const data = (await client.httpGet(`/publicCloud/project/${projectId}/rancher`)) as unknown[];

	return { results: data.map((svc) => ({ name: String(svc), value: String(svc) })) };
}
