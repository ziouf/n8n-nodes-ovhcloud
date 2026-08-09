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
			displayName: 'Aclid',
			name: 'aclId',
			type: 'number',
			default: 0,
			required: true,
			description: 'Acl ID',
		},
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
 * Delete single IP ACL
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/ceph/{serviceName}/acl/{aclId}
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const aclId = this.getNodeParameter('aclId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/acl/' + encodeURIComponent(aclId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
