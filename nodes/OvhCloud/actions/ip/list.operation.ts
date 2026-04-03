import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List IP Blocks operation for IP resource
 *
 * Retrieves all IP blocks for the authenticated account:
 * - HTTP GET request to `/ip` endpoint
 * - No additional parameters required
 * - Returns list of IP block identifiers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List IP Blocks operation.
 *
 * Retrieves all IP blocks for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /ip
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing IP blocks
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/ip')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
