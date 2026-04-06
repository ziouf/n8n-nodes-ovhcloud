import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get IP Task operation.
 *
 * Retrieves details of a specific task.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/task/{taskId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block identifier',
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The task identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get IP Task operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing task details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const taskId = this.getNodeParameter('taskId', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/task/${taskId}`)) as IDataObject;
	return [{ json: data }];
}
