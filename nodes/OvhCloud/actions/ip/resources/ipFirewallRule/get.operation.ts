import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get details of a specific firewall rule.
 *
 * Retrieves information about a specific firewall rule.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}/rule/{sequence}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Firewall Rule operation
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
			displayName: 'IP On Firewall',
			name: 'ipOnFirewall',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP address on the firewall',
			displayOptions,
		},
		{
			displayName: 'Sequence',
			name: 'sequence',
			type: 'number',
			default: 0,
			required: true,
			description: 'The rule sequence number',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Firewall Rule operation.
 *
 * Retrieves details of a specific firewall rule.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}/rule/{sequence}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing firewall rule details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', 0) as string;
	const sequence = this.getNodeParameter('sequence', 0) as number;
	const data = (await client.httpGet(
		`/ip/${ipBlock}/firewall/${ipOnFirewall}/rule/${sequence}`,
	)) as IDataObject;
	return [{ json: data }];
}
