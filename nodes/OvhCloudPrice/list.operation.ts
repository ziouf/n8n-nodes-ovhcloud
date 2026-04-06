import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Price Services operation for Price resource
 *
 * Retrieves all price services for the authenticated account:
 * - HTTP GET request to `/price` endpoint
 * - No additional parameters required
 * - Returns list of price service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Price Services operation.
 *
 * Retrieves all price services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /price
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing price service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/price')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
