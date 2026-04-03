import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Products operation for Products resource
 *
 * Retrieves all products for the authenticated account:
 * - HTTP GET request to `/products` endpoint
 * - No additional parameters required
 * - Returns list of product names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Products operation.
 *
 * Retrieves all products for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /products
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing product names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/products')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
