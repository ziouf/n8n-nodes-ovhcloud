import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Dedicated Servers operation for Dedicated resource
 *
 * Retrieves all dedicated servers for the authenticated account:
 * - HTTP GET request to `/dedicated/server` endpoint
 * - No additional parameters required
 * - Returns list of dedicated server names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Dedicated Servers operation.
 *
 * Retrieves all dedicated servers for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing dedicated servers
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/server')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
