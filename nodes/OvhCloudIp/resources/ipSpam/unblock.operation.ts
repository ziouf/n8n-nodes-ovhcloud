import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Unblock IP Spam operation.
 *
 * Releases the IP from anti-spam system.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/spam/{ipSpamming}/unblock
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
 * Executes the Unblock IP Spam operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipSpamming = this.getNodeParameter('ipSpamming', 0) as string;
	const data = (await client.httpPost(`/ip/${ipBlock}/spam/${ipSpamming}/unblock`)) as IDataObject;
	return [{ json: data }];
}
