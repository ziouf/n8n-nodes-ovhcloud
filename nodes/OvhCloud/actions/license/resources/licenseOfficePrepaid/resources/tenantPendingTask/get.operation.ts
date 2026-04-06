import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * Get a specific tenant pending task for an Office Prepaid license.
 *
 * HTTP method: GET
 * Endpoint: /license/officePrepaid/{serviceName}/tenantPendingTask/{id}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Office Prepaid license service',
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the tenant pending task',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Tenant Pending Task operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const taskId = this.getNodeParameter('taskId', 0) as string;
	const data = (await client.httpGet(
		`/license/officePrepaid/${serviceName}/tenantPendingTask/${taskId}`,
	)) as IDataObject;
	return [{ json: data }];
}
