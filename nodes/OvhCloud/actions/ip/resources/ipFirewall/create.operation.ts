import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a firewall rule for an IP.
 *
 * Adds a new IP to the firewall.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/firewall
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Create Firewall operation
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
			description: 'The IP address to add to the firewall',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Firewall operation.
 *
 * Adds a new IP to the firewall.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/firewall
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', 0) as string;
	const data = (await client.httpPost(`/ip/${ipBlock}/firewall`, {
		body: { ipOnFirewall },
	})) as IDataObject;
	return [{ json: data }];
}
