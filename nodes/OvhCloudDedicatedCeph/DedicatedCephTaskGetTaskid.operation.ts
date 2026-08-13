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
			displayName: 'Servicename',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Service name',
		},
		{
			displayName: 'Taskid',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'Task ID',
		},
	];
}

/**
 * Get task details
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex) as string;
	const client = getClient(this);
	const data = (await client.httpGet('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/task/' + encodeURIComponent(taskId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
