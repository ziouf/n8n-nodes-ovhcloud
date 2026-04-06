import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific Managed CMS task.
 *
 * HTTP method: GET
 * Endpoint: /v2/managedCMS/task/{taskId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the task',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Managed CMS Task operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const taskId = this.getNodeParameter('taskId', 0) as string;
	const data = (await client.httpGet(`/v2/managedCMS/task/${taskId}`)) as IDataObject;
	return [{ json: data }];
}
