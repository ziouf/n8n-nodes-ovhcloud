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
			displayName: 'Poolname',
			name: 'poolName',
			type: 'string',
			default: '',
			required: true,
			description: 'Pool name',
		},
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
 * Clear user-pool permission for single pool
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const poolName = this.getNodeParameter('poolName', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const userName = this.getNodeParameter('userName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/user/' + encodeURIComponent(userName) + '/pool/' + encodeURIComponent(poolName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
