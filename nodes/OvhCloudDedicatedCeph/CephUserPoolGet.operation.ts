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
 * List user-pool permissions
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/user/{userName}/pool
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userName = this.getNodeParameter('userName', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/user/' + encodeURIComponent(userName) + '/pool')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
