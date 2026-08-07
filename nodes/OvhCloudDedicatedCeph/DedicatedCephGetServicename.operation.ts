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
 * Get cluster details
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/ceph/' + encodeURIComponent(serviceName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
