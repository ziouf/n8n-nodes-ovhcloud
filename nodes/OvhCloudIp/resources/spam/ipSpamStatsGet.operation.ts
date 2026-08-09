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
		displayName: 'Ip Spamming',
		name: 'ipSpamming',
		type: 'string',
		default: '',
		required: true,
		description: 'IP address which is sending spam',
		displayOptions,
	},
	{
		displayName: 'From',
		name: 'from',
		type: 'string',
		default: '',
		required: true,
		description: 'Start date',
		displayOptions,
	},
	{
		displayName: 'To',
		name: 'to',
		type: 'string',
		default: '',
		required: true,
		description: 'End date',
		displayOptions,
	},
	];
}

/**
 * Executes the Get Spam Stats operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/spam/{ipSpamming}/stats
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipSpamming = this.getNodeParameter('ipSpamming', _itemIndex) as string;

	const from = this.getNodeParameter('from', _itemIndex) as string;
	const to = this.getNodeParameter('to', _itemIndex) as string;

	const qs: IDataObject = {
		from: from,
		to: to,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/ip/${encodeURIComponent(ip)}/spam/${encodeURIComponent(ipSpamming)}/stats`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
