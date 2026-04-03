import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List IP Reverse DNS entries operation
 *
 * Retrieves all reverse DNS entries for a specific IP block:
 * - HTTP GET request to `/ip/{ipBlock}/reverse` endpoint
 * - IP block parameter is required
 * - Returns list of reverse DNS entries
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List IP Reverse DNS entries operation.
 *
 * Retrieves all reverse DNS entries for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/reverse
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing reverse DNS entries
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/reverse`)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
