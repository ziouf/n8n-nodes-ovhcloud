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
 * Delete an existing single ceph user
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/ceph/{serviceName}/user/{userName}
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const userName = this.getNodeParameter('userName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/user/' + encodeURIComponent(userName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
