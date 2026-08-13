import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service ID',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'CMS service ID',
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
 * Executes the Get GET /managedCMS/resource/{serviceId}/task/{taskId} operation.
 *
 * HTTP method: GET
 * Endpoint: /managedCMS/resource/{serviceId}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceId = this.getNodeParameter('serviceId', _itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/managedCMS/resource/' + serviceId + '/task/' + taskId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
