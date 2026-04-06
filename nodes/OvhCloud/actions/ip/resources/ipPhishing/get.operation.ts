import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get IP Phishing entry operation.
 *
 * Retrieves details of a specific anti-phishing entry.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/phishing/{id}
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
			displayName: 'Phishing ID',
			name: 'phishingId',
			type: 'string',
			default: '',
			required: true,
			description: 'The phishing entry identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get IP Phishing entry operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing phishing entry details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const phishingId = this.getNodeParameter('phishingId', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/phishing/${phishingId}`)) as IDataObject;
	return [{ json: data }];
}
