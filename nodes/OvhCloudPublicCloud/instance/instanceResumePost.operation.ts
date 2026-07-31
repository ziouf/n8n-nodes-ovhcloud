import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [];
}

/**
 * Executes the Resume Instance operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/instance/{instanceId}/resume
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/instance/${instanceId}/resume`,
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
