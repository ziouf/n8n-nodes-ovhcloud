import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get IP Firewall rule operation
 *
 * Retrieves detailed information for a specific firewall rule:
 * - HTTP GET request to `/ip/{ipBlock}/firewall/{ipOnFirewall}` endpoint
 * - IP block and firewall IP parameters are required
 * - Returns firewall rule details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get IP Firewall rule operation
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
	];
}

/**
 * Executes the Get IP Firewall rule operation.
 *
 * Retrieves detailed information for a specific firewall rule.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing firewall rule details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/firewall/${ipOnFirewall}`)) as IDataObject;
	return [{ json: data }];
}
