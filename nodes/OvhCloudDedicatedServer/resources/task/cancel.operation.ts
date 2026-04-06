import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Cancel Task operation
 *
 * Cancels a specific task for a dedicated server.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/task/{taskId}/cancel
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'number',
			default: undefined,
			required: true,
			description: 'The ID of the task to cancel',
			displayOptions,
		},
	];
}

/**
 * Executes the Cancel Task operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const taskId = this.getNodeParameter('taskId', 0) as number;

	const data = (await client.httpPost(
		`/dedicated/server/${serviceName}/task/${taskId}/cancel`,
	)) as IDataObject;
	return [{ json: data }];
}
