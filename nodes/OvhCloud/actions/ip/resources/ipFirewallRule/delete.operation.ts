import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Delete a firewall rule.
 *
 * Removes a specific rule from an IP on the firewall.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}/rule/{sequence}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Delete Firewall Rule operation
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
			description: 'The rule sequence number to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Firewall Rule operation.
 *
 * Removes a specific rule from an IP on the firewall.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}/rule/{sequence}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', 0) as string;
	const sequence = this.getNodeParameter('sequence', 0) as number;
	const data = (await client.httpDelete(
		`/ip/${ipBlock}/firewall/${ipOnFirewall}/rule/${sequence}`,
	)) as IDataObject;
	return [{ json: data }];
}
