import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get IP Mitigation operation
 *
 * Retrieves mitigation information for a specific IP block:
 * - HTTP GET request to `/ip/{ipBlock}/mitigation` endpoint
 * - IP block parameter is required
 * - Returns mitigation details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get IP Mitigation operation
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
	];
}

/**
 * Executes the Get IP Mitigation operation.
 *
 * Retrieves mitigation information for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/mitigation
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing mitigation details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/mitigation`)) as IDataObject;
	return [{ json: data }];
}
