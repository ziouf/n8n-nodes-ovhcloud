import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete a reverse delegation target.
 *
 * Removes a reverse delegation target from an IPv6 subnet.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ipBlock}/delegation/{target}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Delete Delegation operation
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
			displayName: 'Target',
			name: 'target',
			type: 'string',
			default: '',
			required: true,
			description: 'The delegation target to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Delegation operation.
 *
 * Removes a reverse delegation target.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ipBlock}/delegation/{target}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const target = this.getNodeParameter('target', 0) as string;

	await client.httpDelete(`/ip/${ipBlock}/delegation/${target}`);

	return [{ json: { success: true, ipBlock, target } }];
}
