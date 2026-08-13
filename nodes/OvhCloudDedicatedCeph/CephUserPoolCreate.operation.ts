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
 * Create new user-pool permissions. All old permissions will be cleared
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/user/{userName}/pool
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userName = this.getNodeParameter('userName', _itemIndex) as string;
	const client = getClient(this);
	const data = (await client.httpPost('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/user/' + encodeURIComponent(userName) + '/pool')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
