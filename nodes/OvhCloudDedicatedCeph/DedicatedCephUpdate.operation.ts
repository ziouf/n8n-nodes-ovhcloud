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
 * Update cluster details
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/ceph/{serviceName}
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const crushTunables = this.getNodeParameter('crushTunables', _itemIndex) as string;
	const label = this.getNodeParameter('label', _itemIndex) as string;
	const client = getClient(this);
	const body: IDataObject = {};
			body['crushTunables'] = crushTunables;
		body['label'] = label;
	const data = (await client.httpPut('/dedicated/ceph/' + encodeURIComponent(serviceName), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
