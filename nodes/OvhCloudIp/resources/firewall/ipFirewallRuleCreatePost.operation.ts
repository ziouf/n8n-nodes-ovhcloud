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
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		options: [
			{ name: 'Deny', value: 'deny' },
			{ name: 'Permit', value: 'permit' },
		],
		default: 'permit',
		required: true,
		description: 'Action on this rule',
		displayOptions,
	},
	{
		displayName: 'Protocol',
		name: 'protocol',
		type: 'options',
		options: [
			{ name: 'AH', value: 'ah' },
			{ name: 'ESP', value: 'esp' },
			{ name: 'GRE', value: 'gre' },
			{ name: 'ICMP', value: 'icmp' },
			{ name: 'IPv4', value: 'ipv4' },
			{ name: 'TCP', value: 'tcp' },
			{ name: 'UDP', value: 'udp' },
		],
		default: 'tcp',
		required: true,
		description: 'Network protocol',
		displayOptions,
	},
	{
		displayName: 'Sequence',
		name: 'sequence',
		type: 'string',
		default: '',
		required: true,
		description: 'Sequence number of your rule',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Add Firewall Rule operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/firewall/{ipOnFirewall}/rule
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', _itemIndex) as string;

	const action = (this.getNodeParameter('action', _itemIndex) as string) || '';
	const protocol = (this.getNodeParameter('protocol', _itemIndex) as string) || '';
	const sequence = (this.getNodeParameter('sequence', _itemIndex) as string) || '';

	const body: IDataObject = {};
	body.action = action;
	body.protocol = protocol;
	body.sequence = sequence;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/firewall/${encodeURIComponent(ipOnFirewall)}/rule`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
