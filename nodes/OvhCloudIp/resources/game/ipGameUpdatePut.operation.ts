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
		displayName: 'Ip On Game',
		name: 'ipOnGame',
		type: 'string',
		default: '',
		required: true,
		description: 'IP under game anti-ddos',
		displayOptions,
	},
	{
		displayName: 'Firewall Mode Enabled',
		name: 'firewallModeEnabled',
		type: 'boolean',
		default: false,
		description: 'Whether to enable firewall mode (in UDP, only allow traffic matching your rules)',
		displayOptions,
	},
	];
}

/**
 * Executes the Put Update Game Anti-DDoS IP operation.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ip}/game/{ipOnGame}
 */

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const ipOnGame = this.getNodeParameter('ipOnGame', itemIndex) as string;

	const firewallModeEnabled = this.getNodeParameter('firewallModeEnabled', itemIndex) as boolean;

	const body: IDataObject = {};
	body.firewallModeEnabled = firewallModeEnabled;

	const client = new ApiClient(this);
	const data = (await client.httpPut(`/ip/${encodeURIComponent(ip)}/game/${encodeURIComponent(ipOnGame)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
