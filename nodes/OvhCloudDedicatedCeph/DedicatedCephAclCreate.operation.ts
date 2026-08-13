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
 * Create one or more new IP ACLs
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/acl
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const aclList = this.getNodeParameter('aclList', _itemIndex) as string;
	const client = getClient(this);
	const body: IDataObject = {};
			body['aclList'] = aclList;
	const data = (await client.httpPost('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/acl', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
