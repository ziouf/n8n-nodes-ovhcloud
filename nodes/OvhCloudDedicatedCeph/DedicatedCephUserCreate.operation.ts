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
	];
}

/**
 * Create a new ceph user
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/user
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userName = this.getNodeParameter('userName', _itemIndex) as string;
	const client = getClient(this);
	const body: IDataObject = {};
			body['userName'] = userName;
	const data = (await client.httpPost('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/user', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
