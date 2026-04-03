import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Orders operation for Order resource
 *
 * Retrieves all orders for the authenticated account:
 * - HTTP GET request to `/order` endpoint
 * - No additional parameters required
 * - Returns list of order IDs
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Orders operation.
 *
 * Retrieves all orders for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /order
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing order IDs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/order')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
