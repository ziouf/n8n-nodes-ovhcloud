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
			description: 'Service name',
		},
		{
			displayName: 'Username',
			name: 'userName',
			type: 'string',
			default: '',
			required: true,
			description: 'User name',
		},
	];
}

/**
 * Update user-pool permission for single pool
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/ceph/{serviceName}/user/{userName}/pool
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userName = this.getNodeParameter('userName', _itemIndex) as string;
	const classRead = this.getNodeParameter('classRead', _itemIndex) as string;
	const classWrite = this.getNodeParameter('classWrite', _itemIndex) as string;
	const execute = this.getNodeParameter('execute', _itemIndex) as string;
	const poolName = this.getNodeParameter('poolName', _itemIndex) as string;
	const read = this.getNodeParameter('read', _itemIndex) as string;
	const write = this.getNodeParameter('write', _itemIndex) as string;
	const client = new ApiClient(this);
	const body: IDataObject = {};
			body['classRead'] = classRead;
		body['classWrite'] = classWrite;
		body['execute'] = execute;
		body['poolName'] = poolName;
		body['read'] = read;
		body['write'] = write;
	const data = (await client.httpPut('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/user/' + encodeURIComponent(userName) + '/pool', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
