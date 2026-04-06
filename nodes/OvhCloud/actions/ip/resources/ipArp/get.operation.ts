import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get details of an ARP blocked IP.
 *
 * Retrieves information about a specific ARP blocked IP.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/arp/{ipBlocked}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get ARP operation
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
			description: 'The ARP blocked IP address',
			displayOptions,
		},
	];
}

/**
 * Executes the Get ARP operation.
 *
 * Retrieves details of a specific ARP blocked IP.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/arp/{ipBlocked}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing ARP blocked IP details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipBlocked = this.getNodeParameter('ipBlocked', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/arp/${ipBlocked}`)) as IDataObject;
	return [{ json: data }];
}
