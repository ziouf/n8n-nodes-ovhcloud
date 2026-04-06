import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a new firewall rule.
 *
 * Adds a new rule to an IP on the firewall.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}/rule
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Create Firewall Rule operation
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
			displayName: 'Rule Fields',
			name: 'ruleFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			required: true,
			displayOptions,
			options: [
				{
					displayName: 'Action',
					name: 'action',
					type: 'options',
					options: [
						{ name: 'Deny', value: 'deny' },
						{ name: 'Permit', value: 'permit' },
					],
					default: 'deny',
					description: 'Rule action',
				},
				{
					displayName: 'Protocol',
					name: 'protocol',
					type: 'options',
					options: [
						{ name: 'TCP', value: 'tcp' },
						{ name: 'UDP', value: 'udp' },
						{ name: 'ICMP', value: 'icmp' },
						{ name: 'AH', value: 'ah' },
						{ name: 'GRE', value: 'gre' },
						{ name: 'SCTP', value: 'sctp' },
					],
					default: 'tcp',
					description: 'Network protocol',
				},
				{
					displayName: 'Source',
					name: 'source',
					type: 'string',
					default: '',
					description: 'Source IP or network',
				},
				{
					displayName: 'Sequence',
					name: 'sequence',
					type: 'number',
					default: 0,
					description: 'Rule sequence number',
				},
			],
		},
	];
}

/**
 * Executes the Create Firewall Rule operation.
 *
 * Adds a new rule to an IP on the firewall.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/firewall/{ipOnFirewall}/rule
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnFirewall = this.getNodeParameter('ipOnFirewall', 0) as string;
	const ruleFields = this.getNodeParameter('ruleFields', 0) as IDataObject;
	const data = (await client.httpPost(`/ip/${ipBlock}/firewall/${ipOnFirewall}/rule`, {
		body: ruleFields,
	})) as IDataObject;
	return [{ json: data }];
}
