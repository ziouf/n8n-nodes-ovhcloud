import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List firewall rules for an IP on firewall.
 *
 * Retrieves all firewall rules for a specific IP on firewall.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}/rule
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the List Firewall Rules operation
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
			displayName: 'State',
			name: 'state',
			type: 'options',
			options: [
				{ name: 'Ok', value: 'ok' },
				{ name: 'Off', value: 'off' },
			],
			default: 'ok',
			description: 'Filter by rule state',
			displayOptions,
		},
	];
}

/**
 * Executes the List Firewall Rules operation.
 *
 * Retrieves all firewall rules for a specific IP on firewall.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}/rule
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing firewall rule IDs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', 0) as string;
	const state = this.getNodeParameter('state', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/firewall/${ipOnFirewall}/rule`, {
		qs: { state },
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
