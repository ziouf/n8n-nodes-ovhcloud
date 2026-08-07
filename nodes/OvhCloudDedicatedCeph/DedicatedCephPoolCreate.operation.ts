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
	];
}

/**
 * Create a new ceph pool
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/pool
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const poolName = this.getNodeParameter('poolName', itemIndex) as string;
	const client = new ApiClient(this);
	const body: IDataObject = {};
			body['poolName'] = poolName;
	const data = (await client.httpPost('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/pool', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
