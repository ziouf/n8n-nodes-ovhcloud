import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get details of a specific game mitigation rule.
 *
 * Retrieves information about a specific game mitigation rule.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/game/{ipOnGame}/rule/{id}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Game Rule operation
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
			displayName: 'Rule ID',
			name: 'ruleId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get Game Rule operation.
 *
 * Retrieves details of a specific game mitigation rule.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/game/{ipOnGame}/rule/{id}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing game rule details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnGame = this.getNodeParameter('ipOnGame', 0) as string;
	const ruleId = this.getNodeParameter('ruleId', 0) as number;
	const data = (await client.httpGet(
		`/ip/${ipBlock}/game/${ipOnGame}/rule/${ruleId}`,
	)) as IDataObject;
	return [{ json: data }];
}
