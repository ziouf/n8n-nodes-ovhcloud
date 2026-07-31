import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [];
}

/**
 * Executes the Get Instance Interface operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/instance/{instanceId}/interface/{interfaceId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;
	const interfaceId = this.getNodeParameter('interfaceId', 0) as string;
	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/instance/${instanceId}/interface/${interfaceId}`,
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
