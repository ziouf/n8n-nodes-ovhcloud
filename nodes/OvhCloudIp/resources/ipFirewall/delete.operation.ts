import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete an IP from the firewall.
 *
 * Removes an IP and its rules from the firewall.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Delete Firewall operation
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
			description: 'The IP address to remove from the firewall',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Firewall operation.
 *
 * Removes an IP and its rules from the firewall.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', 0) as string;
	const data = (await client.httpDelete(`/ip/${ipBlock}/firewall/${ipOnFirewall}`)) as IDataObject;
	return [{ json: data }];
}
