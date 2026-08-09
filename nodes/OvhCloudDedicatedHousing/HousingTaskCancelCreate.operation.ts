import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
		{
			displayName: 'Servicename',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your Housing bay',
		},
		{
			displayName: 'Taskid',
			name: 'taskId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the task',
		},
	];
}

/**
 * this action stop the task progression if it\'s possible
 *
 * HTTP method: POST
 * Endpoint: /dedicated/housing/{serviceName}/task/{taskId}/cancel
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpPost('/dedicated/housing/' + encodeURIComponent(serviceName) + '/task/' + encodeURIComponent(taskId) + '/cancel')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
