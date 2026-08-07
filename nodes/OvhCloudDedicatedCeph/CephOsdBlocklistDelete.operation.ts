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
			displayName: 'Address',
			name: 'address',
			type: 'string',
			default: '',
			required: true,
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
 * Delete a Ceph OSD blocklist entry. DANGEROUS
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/ceph/{serviceName}/osd/blocklist/{address}
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const address = this.getNodeParameter('address', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/osd/blocklist/' + encodeURIComponent(address))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
