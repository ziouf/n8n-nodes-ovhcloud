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
 * Get details about IP ACL
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/acl/{aclId}
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const aclId = this.getNodeParameter('aclId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/acl/' + encodeURIComponent(aclId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
