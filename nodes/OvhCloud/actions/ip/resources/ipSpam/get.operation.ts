import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get IP Spam entry operation.
 *
 * Retrieves details of a specific spam entry.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/spam/{ipSpamming}
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
	];
}

/**
 * Executes the Get IP Spam entry operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing spam entry details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipSpamming = this.getNodeParameter('ipSpamming', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/spam/${ipSpamming}`)) as IDataObject;
	return [{ json: data }];
}
