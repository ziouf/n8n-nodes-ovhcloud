import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [];
}

/**
 * Executes the Get Instance Group operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/instance/group/{groupId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const groupId = this.getNodeParameter('groupId', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/instance/group/${groupId}`,
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
