import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [];
}

/**
 * Executes the Delete Instance Interface operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/{projectId}/instance/{instanceId}/interface/{interfaceId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;
	const interfaceId = this.getNodeParameter('interfaceId', 0) as string;
	await client.httpDelete(
		`/publicCloud/project/${projectId}/instance/${instanceId}/interface/${interfaceId}`,
	);

	return this.helpers.returnJsonArray([{ deleted: interfaceId }]);
}
