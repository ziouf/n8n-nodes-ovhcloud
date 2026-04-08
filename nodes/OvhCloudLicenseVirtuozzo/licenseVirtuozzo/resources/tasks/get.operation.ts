import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Get a specific task for a Virtuozzo license.
 *
 * HTTP method: GET
 * Endpoint: /license/virtuozzo/{serviceName}/tasks/{taskId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Virtuozzo license service',
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the task',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Task operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const taskId = this.getNodeParameter('taskId', 0) as number;
	const data = (await client.httpGet(
		`/license/virtuozzo/${serviceName}/tasks/${taskId}`,
	)) as IDataObject;
	return [{ json: data }];
}
