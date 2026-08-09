import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
		description: 'The IP address protected by the firewall',
		displayOptions,
	},
	];
}

/**
 * Executes the Delete Delete Firewall IP operation.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ip}/firewall/{ipOnFirewall}
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete(`/ip/${encodeURIComponent(ip)}/firewall/${encodeURIComponent(ipOnFirewall)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
