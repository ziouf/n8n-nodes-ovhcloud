import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name',
			displayOptions,
		},
		{
			displayName: 'ExpireDate',
			name: 'expireDate',
			type: 'string',
			default: '',
			description: 'The expiredate parameter',
			displayOptions,
		},
		{
			displayName: 'Fingerprint',
			name: 'fingerprint',
			type: 'string',
			default: '',
			description: 'The fingerprint parameter',
			displayOptions,
		},
		{
			displayName: 'Serial',
			name: 'serial',
			type: 'string',
			default: '',
			description: 'The serial parameter',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'The type parameter',
			displayOptions,
		},
	];
}

/**
 * Ssl for this iplb
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/ssl
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const expireDate = this.getNodeParameter('expireDate', _itemIndex) as string;
	const fingerprint = this.getNodeParameter('fingerprint', _itemIndex) as string;
	const serial = this.getNodeParameter('serial', _itemIndex) as string;
	const type = this.getNodeParameter('type', _itemIndex) as string;


const qs: IDataObject = {
    expireDate: expireDate,
    fingerprint: fingerprint,
    serial: serial,
    type: type
  };



	const client = getClient(this);
	const data = (await client.httpGet('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'ssl', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

