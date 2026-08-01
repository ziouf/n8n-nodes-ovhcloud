import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
		},
	];
}

/**
 * List Email Pro tasks
 *
 * HTTP method: GET
 * Endpoint: /email/pro/{serviceName}/tasks
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/email/pro/${serviceName}/tasks`)) as string[];
	return this.helpers.returnJsonArray(data.map((taskId) => ({ taskId })));
}
