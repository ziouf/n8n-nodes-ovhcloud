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
		description: 'The IP address protected by the firewall',
		displayOptions,
	},
	{
		displayName: 'Enabled',
		name: 'enabled',
		type: 'boolean',
		default: false,
		description: 'Whether to enable the firewall for this IP',
		displayOptions,
	},
	];
}

/**
 * Executes the Put Update Firewall IP operation.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ip}/firewall/{ipOnFirewall}
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', _itemIndex) as string;

	const enabled = this.getNodeParameter('enabled', _itemIndex) as boolean;

	const body: IDataObject = {};
	body.enabled = enabled;

	const client = getClient(this);
	const data = (await client.httpPut(`/ip/${encodeURIComponent(ip)}/firewall/${encodeURIComponent(ipOnFirewall)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
