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
		displayName: 'To',
		name: 'to',
		type: 'string',
		default: '',
		required: true,
		description: 'Service destination',
		displayOptions,
	},
	{
		displayName: 'Nexthop',
		name: 'nexthop',
		type: 'string',
		default: '',
		description: 'Nexthop of destination service',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Move IP operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/move
 */

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const to = (this.getNodeParameter('to', itemIndex) as string) || '';
	const nexthop = (this.getNodeParameter('nexthop', itemIndex) as string) || '';

	const body: IDataObject = {};
	body.to = to;
	if (nexthop) body.nexthop = nexthop;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/move`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
