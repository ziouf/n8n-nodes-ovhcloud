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
		displayName: 'Sequence',
		name: 'sequence',
		type: 'string',
		default: '',
		required: true,
		description: 'Sequence number of the rule',
		displayOptions,
	},
	];
}

/**
 * Executes the Delete Delete Firewall Rule operation.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}
 */

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', itemIndex) as string;

	const sequence = this.getNodeParameter('sequence', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete(`/ip/${encodeURIComponent(ip)}/firewall/${encodeURIComponent(ipOnFirewall)}/rule/${encodeURIComponent(sequence)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
