import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific vRack Services task.
 *
 * HTTP method: GET
 * Endpoint: /v2/vrackServices/task/{taskId}
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
 * Executes the Get vRack Services Task operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const taskId = this.getNodeParameter('taskId', 0) as string;
	const data = (await client.httpGet(`/v2/vrackServices/task/${taskId}`)) as IDataObject;
	return [{ json: data }];
}
