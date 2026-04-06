import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List ARP blocked IPs for an IP block.
 *
 * Retrieves all ARP blocked IPs for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/arp
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the List ARP operation
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
			displayName: 'State',
			name: 'state',
			type: 'options',
			options: [
				{ name: 'Blocked', value: 'blocked' },
				{ name: 'Unblocked', value: 'unblocked' },
			],
			default: 'blocked',
			description: 'Filter by state',
			displayOptions,
		},
	];
}

/**
 * Executes the List ARP operation.
 *
 * Retrieves all ARP blocked IPs for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/arp
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing ARP blocked IPs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const state = this.getNodeParameter('state', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/arp`, { qs: { state } })) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
