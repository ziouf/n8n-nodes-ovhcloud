import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific Public Cloud Rancher task.
 *
 * HTTP method: GET
 * Endpoint: /v2/publicCloud/project/{projectId}/rancher/{rancherId}/task/{taskId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Project ID',
			name: 'projectId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the Public Cloud project',
			displayOptions,
		},
		{
			displayName: 'Rancher ID',
			name: 'rancherId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the Rancher service',
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
 * Executes the Get Public Cloud Rancher Task operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('projectId', 0) as string;
	const rancherId = this.getNodeParameter('rancherId', 0) as string;
	const taskId = this.getNodeParameter('taskId', 0) as string;
	const data = (await client.httpGet(`/v2/publicCloud/project/${projectId}/rancher/${rancherId}/task/${taskId}`)) as IDataObject;
	return [{ json: data }];
}
