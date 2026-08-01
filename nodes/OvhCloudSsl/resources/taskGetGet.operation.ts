import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Certificate ID',
			name: 'certificateId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Get a specific SSL certificate task
 *
 * HTTP method: GET
 * Endpoint: /ssl/{serviceName}/tasks/{taskId}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const certificateId = this.getNodeParameter('certificateId', itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;
	const data = (await client.httpGet(`/ssl/${certificateId}/tasks/${taskId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
