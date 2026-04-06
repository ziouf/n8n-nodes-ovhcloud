import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete a game mitigation rule.
 *
 * Removes a specific rule from an IP on game protection.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ipBlock}/game/{ipOnGame}/rule/{id}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Delete Game Rule operation
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
			description: 'The rule ID to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Game Rule operation.
 *
 * Removes a specific rule from an IP on game protection.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ipBlock}/game/{ipOnGame}/rule/{id}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnGame = this.getNodeParameter('ipOnGame', 0) as string;
	const ruleId = this.getNodeParameter('ruleId', 0) as number;
	const data = (await client.httpDelete(
		`/ip/${ipBlock}/game/${ipOnGame}/rule/${ruleId}`,
	)) as IDataObject;
	return [{ json: data }];
}
