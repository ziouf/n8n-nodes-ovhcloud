import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Get a specific VMware Cloud Director VDC task.
 *
 * HTTP method: GET
 * Endpoint: /v2/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/task/{taskId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization ID',
			name: 'organizationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the organization',
			displayOptions,
		},
		{
			displayName: 'Virtual Data Center ID',
			name: 'virtualDataCenterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the virtual data center',
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
 * Executes the Get VMware Cloud Director Organization VDC Task operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationId = this.getNodeParameter('organizationId', 0) as string;
	const virtualDataCenterId = this.getNodeParameter('virtualDataCenterId', 0) as string;
	const taskId = this.getNodeParameter('taskId', 0) as string;
	const data = (await client.httpGet(`/v2/vmwareCloudDirector/organization/${organizationId}/virtualDataCenter/${virtualDataCenterId}/task/${taskId}`)) as IDataObject;
	return [{ json: data }];
}
