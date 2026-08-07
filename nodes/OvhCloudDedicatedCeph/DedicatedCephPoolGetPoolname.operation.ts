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
	];
}

/**
 * Get details about an existing ceph pool
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/pool/{poolName}
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const poolName = this.getNodeParameter('poolName', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/pool/' + encodeURIComponent(poolName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
