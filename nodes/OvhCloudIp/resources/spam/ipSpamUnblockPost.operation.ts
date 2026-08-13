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
		displayName: 'Ip Spamming',
		name: 'ipSpamming',
		type: 'string',
		default: '',
		required: true,
		description: 'IP address which is sending spam',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Unblock Spamming IP operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/spam/{ipSpamming}/unblock
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const ipSpamming = this.getNodeParameter('ipSpamming', _itemIndex) as string;

	const body: IDataObject = {};

	const client = getClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/spam/${encodeURIComponent(ipSpamming)}/unblock`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
