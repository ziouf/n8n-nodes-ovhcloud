import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
	{
		displayName: 'Ip',
		name: 'ip',
		type: 'string',
		default: '',
		required: true,
		description: 'The IP block identifier (e.g. 1.2.3.4/32)',
		displayOptions,
	},
	{
		displayName: 'Ip On Firewall',
		name: 'ipOnFirewall',
		type: 'string',
		default: '',
		required: true,
		description: 'IP to add on firewall',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Add Firewall IP operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/firewall
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipOnFirewall = (this.getNodeParameter('ipOnFirewall', _itemIndex) as string) || '';

	const body: IDataObject = {};
	body.ipOnFirewall = ipOnFirewall;

	const client = getClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/firewall`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
