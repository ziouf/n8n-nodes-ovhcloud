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
 * Update cluster details
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/ceph/{serviceName}
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const crushTunables = this.getNodeParameter('crushTunables', itemIndex) as string;
	const label = this.getNodeParameter('label', itemIndex) as string;
	const client = new ApiClient(this);
	const body: IDataObject = {};
			body['crushTunables'] = crushTunables;
		body['label'] = label;
	const data = (await client.httpPut('/dedicated/ceph/' + encodeURIComponent(serviceName), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
