/**
 * @brief Dynamic list search for Public Cloud Block Storage Volumes (GET only)
 *
 * Retrieves available volume IDs from the OVH API v2 for dynamic dropdown selection.
 * Used by n8n to populate block storage volume lists when configuring public cloud-related operations.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/blockStorage/volume (returns array of volume UUIDs)
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing block storage volume IDs with name-value pairs for n8n dropdowns
 */
import type { IDataObject, ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getPublicCloudBlockStorageVolumes(
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

	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/blockStorage/volume`,
	)) as unknown[];

	return { results: data.map((vol) => ({ name: String(vol), value: String(vol) })) };
}
