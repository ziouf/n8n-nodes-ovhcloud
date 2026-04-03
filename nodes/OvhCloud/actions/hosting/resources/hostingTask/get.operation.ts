import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get Hosting Task operation
 *
 * Retrieves detailed information for a specific task within a private database hosting service.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Hosting Task operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the hosting service',
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
 * Executes the Get Hosting Task operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/task/{taskId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing task details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const taskId = this.getNodeParameter('taskId', 0) as string;
	const data = (await client.httpGet(
		`/hosting/privateDatabase/${serviceName}/task/${taskId}`,
	)) as IDataObject;
	return [{ json: data }];
}
