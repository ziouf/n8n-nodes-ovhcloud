import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List IP Firewall rules operation
 *
 * Retrieves all firewall rules for a specific IP block:
 * - HTTP GET request to `/ip/{ipBlock}/firewall` endpoint
 * - IP block parameter is required
 * - Returns list of firewall rule identifiers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List IP Firewall rules operation.
 *
 * Retrieves all firewall rules for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/firewall
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing firewall rules
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/firewall`)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
