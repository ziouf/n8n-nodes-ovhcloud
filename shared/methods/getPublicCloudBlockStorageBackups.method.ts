/**
 * @brief Dynamic list search for Public Cloud Block Storage Backups (GET only)
 *
 * Retrieves available block storage backup IDs from the OVH API v2 for dynamic dropdown selection.
 * Used by n8n to populate backup lists when configuring public cloud backup-related operations.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/blockStorage/backup (returns array of backup UUIDs)
 *
 * @param this - n8n ILoadOptionsFunctions context, accesses parent `publicCloudProjectId` parameter
 * @returns INodeListSearchResult containing block storage backup IDs with name-value pairs for n8n dropdowns
 */
import type { IDataObject, ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getPublicCloudBlockStorageBackups(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	let projectId: string;
	const paramValue = this.getNodeParameter('publicCloudProjectId', 0) as IDataObject | string;

	if (typeof paramValue === 'string') {
		projectId = paramValue;
	} else if (
		(paramValue as IDataObject).value !== undefined &&
		(paramValue as IDataObject).mode === 'list'
	) {
		projectId = (paramValue as IDataObject).value as string;
	} else if (typeof paramValue === 'object' && paramValue !== null) {
		const objVal = (paramValue as IDataObject).value;
		if (objVal !== undefined && typeof objVal === 'string') {
			projectId = objVal;
		} else {
			throw new Error('publicCloudProjectId parameter is not a valid string');
		}
	} else if (paramValue !== '' && paramValue !== null) {
		projectId = String(paramValue);
	} else {
		throw new Error('publicCloudProjectId parameter is not a valid string');
	}

	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/blockStorage/backup`,
	)) as unknown[];

	return { results: data.map((item) => ({ name: String(item), value: String(item) })) };
}
