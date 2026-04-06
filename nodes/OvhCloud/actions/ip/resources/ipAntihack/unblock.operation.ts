import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Unblock an IP from Anti-Hack.
 *
 * Releases a blocked IP from the Anti-Hack system.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/antihack/{ipBlocked}/unblock
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Unblock Antihack operation
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
			description: 'The blocked IP address to unblock',
			displayOptions,
		},
	];
}

/**
 * Executes the Unblock Antihack operation.
 *
 * Releases a blocked IP from the Anti-Hack system.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/antihack/{ipBlocked}/unblock
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipBlocked = this.getNodeParameter('ipBlocked', 0) as string;

	await client.httpPost(`/ip/${ipBlock}/antihack/${ipBlocked}/unblock`);

	return [{ json: { success: true, ipBlock, ipBlocked } }];
}
