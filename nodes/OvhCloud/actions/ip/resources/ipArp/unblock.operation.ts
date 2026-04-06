import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Unblock an ARP blocked IP.
 *
 * Releases an IP from the ARP blocking system.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/arp/{ipBlocked}/unblock
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Unblock ARP operation
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
			displayName: 'IP Blocked',
			name: 'ipBlocked',
			type: 'string',
			default: '',
			required: true,
			description: 'The ARP blocked IP address to unblock',
			displayOptions,
		},
	];
}

/**
 * Executes the Unblock ARP operation.
 *
 * Releases an IP from the ARP blocking system.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/arp/{ipBlocked}/unblock
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipBlocked = this.getNodeParameter('ipBlocked', 0) as string;

	await client.httpPost(`/ip/${ipBlock}/arp/${ipBlocked}/unblock`);

	return [{ json: { success: true, ipBlock, ipBlocked } }];
}
