import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [];
}

/**
 * Executes the Delete Instance Group operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/{projectId}/instance/group/{groupId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const groupId = this.getNodeParameter('groupId', 0) as string;
	await client.httpDelete(`/publicCloud/project/${projectId}/instance/group/${groupId}`);

	return this.helpers.returnJsonArray([{ deleted: groupId }]);
}
