import { SERVICE_NAME } from './serviceName';
import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
		},
		{
			displayName: 'Taskid',
			name: 'taskId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the task',
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex) as string;
	const client = getClient(this);
	const data = (await client.httpGet('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/task/' + encodeURIComponent(taskId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
