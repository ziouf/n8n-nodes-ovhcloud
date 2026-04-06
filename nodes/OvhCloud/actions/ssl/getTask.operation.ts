import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get SSL Task operation for SSL resource
 *
 * Gets a task of an SSL service:
 * - HTTP GET request to `/ssl/{serviceName}/tasks/{taskId}` endpoint
 * - Service name and task ID parameters are required
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Task operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the SSL service',
			displayOptions,
		},
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
 * Executes the Get SSL Task operation.
 *
 * Gets a task of an SSL service.
 *
 * HTTP method: GET
 * Endpoint: /ssl/{serviceName}/tasks/{taskId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing task details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const taskId = this.getNodeParameter('taskId', 0) as string;
	const data = (await client.httpGet(`/ssl/${serviceName}/tasks/${taskId}`)) as IDataObject;
	return [{ json: data }];
}
