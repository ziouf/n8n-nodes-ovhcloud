import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get IP Spam Stats operation.
 *
 * Retrieves statistics about the email traffic for a spam entry.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/spam/{ipSpamming}/stats
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block identifier',
			displayOptions,
		},
		{
			displayName: 'IP Spamming',
			name: 'ipSpamming',
			type: 'string',
			default: '',
			required: true,
			description: 'The spamming IP address',
			displayOptions,
		},
		{
			displayName: 'From',
			name: 'from',
			type: 'string',
			default: '',
			description: 'Start date for statistics (ISO 8601)',
			displayOptions,
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'string',
			default: '',
			description: 'End date for statistics (ISO 8601)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get IP Spam Stats operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing spam statistics
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipSpamming = this.getNodeParameter('ipSpamming', 0) as string;
	const qs: Record<string, string> = {};
	const from = this.getNodeParameter('from', 0, '') as string;
	const to = this.getNodeParameter('to', 0, '') as string;
	if (from) qs.from = from;
	if (to) qs.to = to;
	const data = (await client.httpGet(`/ip/${ipBlock}/spam/${ipSpamming}/stats`, {
		qs,
	})) as IDataObject;
	return [{ json: data }];
}
