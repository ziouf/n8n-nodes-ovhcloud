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
		displayName: 'Ip Blocked',
		name: 'ipBlocked',
		type: 'string',
		default: '',
		required: true,
		description: 'Your IP',
		displayOptions,
	},
	];
}

/**
 * Executes the Get ARP Blocked IP operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/arp/{ipBlocked}
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipBlocked = this.getNodeParameter('ipBlocked', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/ip/${encodeURIComponent(ip)}/arp/${encodeURIComponent(ipBlocked)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
