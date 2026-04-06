import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get IP Game protection entry operation
 *
 * Retrieves detailed information for a specific game protection entry:
 * - HTTP GET request to `/ip/{ipBlock}/game/{ipOnGame}` endpoint
 * - IP block and game IP parameters are required
 * - Returns game protection entry details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get IP Game protection entry operation
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
	];
}

/**
 * Executes the Get IP Game protection entry operation.
 *
 * Retrieves detailed information for a specific game protection entry.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/game/{ipOnGame}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing game protection entry details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnGame = this.getNodeParameter('ipOnGame', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/game/${ipOnGame}`)) as IDataObject;
	return [{ json: data }];
}
