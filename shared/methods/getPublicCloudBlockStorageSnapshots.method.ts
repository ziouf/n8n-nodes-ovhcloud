/**
 * @brief Dynamic list search for Public Cloud Block Storage Snapshots (GET only)
 *
 * Retrieves available block storage snapshot IDs from the OVH API v2 for dynamic dropdown selection.
 * Used by n8n to populate snapshot lists when configuring public cloud snapshot-related operations.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/blockStorage/snapshot (returns array of snapshot UUIDs)
 *
 * @param this - n8n ILoadOptionsFunctions context, accesses parent `publicCloudProjectId` parameter
 * @returns INodeListSearchResult containing block storage snapshot IDs with name-value pairs for n8n dropdowns
 */
import type { IDataObject, ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getPublicCloudBlockStorageSnapshots(
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
		`/publicCloud/project/${projectId}/blockStorage/snapshot`,
	)) as unknown[];

	return { results: data.map((item) => ({ name: String(item), value: String(item) })) };
}
