import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a new game mitigation rule.
 *
 * Adds a new rule to an IP on game protection.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/game/{ipOnGame}/rule
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Create Game Rule operation
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
			displayName: 'IP On Game',
			name: 'ipOnGame',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP address on game protection',
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
					displayName: 'Protocol',
					name: 'protocol',
					type: 'options',
					options: [
						{ name: 'TCP', value: 'tcp' },
						{ name: 'UDP', value: 'udp' },
					],
					default: 'tcp',
					description: 'Network protocol',
				},
				{
					displayName: 'Ports',
					name: 'ports',
					type: 'string',
					default: '',
					description: 'Port or port range (e.g., "80" or "80-443")',
				},
			],
		},
	];
}

/**
 * Executes the Create Game Rule operation.
 *
 * Adds a new rule to an IP on game protection.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/game/{ipOnGame}/rule
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnGame = this.getNodeParameter('ipOnGame', 0) as string;
	const ruleFields = this.getNodeParameter('ruleFields', 0) as IDataObject;
	const data = (await client.httpPost(`/ip/${ipBlock}/game/${ipOnGame}/rule`, {
		body: ruleFields,
	})) as IDataObject;
	return [{ json: data }];
}
