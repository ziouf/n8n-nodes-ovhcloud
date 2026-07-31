import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [];
}

/**
 * Executes the Get Instance VNC operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/instance/{instanceId}/vnc
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;
	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/instance/${instanceId}/vnc`,
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
