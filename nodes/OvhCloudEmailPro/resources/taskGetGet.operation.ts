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
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
		},
	];
}

/**
 * Get Email Pro task details
 *
 * HTTP method: GET
 * Endpoint: /email/pro/{serviceName}/tasks/{taskId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(`/email/pro/${serviceName}/tasks/${taskId}`)) as Record<
		string,
		unknown
	>;
	return this.helpers.returnJsonArray([data] as INodeExecutionData[]);
}
