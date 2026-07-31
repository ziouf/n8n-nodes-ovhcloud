import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'service Id',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceId identifier',
		},
		{
			displayName: 'task Id',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The taskId identifier',
		},

	];
}

/**
 * Executes the Put Edit a task to provide user input operation.
 *
 * HTTP method: PUT
 * Endpoint: /managedCMS/resource/{serviceId}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceId = this.getNodeParameter('serviceId', itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/managedCMS/resource/' + serviceId + '/task/' + taskId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
