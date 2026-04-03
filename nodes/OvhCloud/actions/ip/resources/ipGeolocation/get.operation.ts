import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get IP Geolocation operation
 *
 * Retrieves geolocation information for a specific IP block:
 * - HTTP GET request to `/ip/{ipBlock}/geolocation` endpoint
 * - IP block parameter is required
 * - Returns geolocation details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get IP Geolocation operation
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
 * Executes the Get IP Geolocation operation.
 *
 * Retrieves geolocation information for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/geolocation
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing geolocation details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/geolocation`)) as IDataObject;
	return [{ json: data }];
}
