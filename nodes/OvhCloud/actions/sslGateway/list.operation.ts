import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List SSL Gateway Services operation for SSL Gateway resource
 *
 * Retrieves all SSL Gateway services for the authenticated account:
 * - HTTP GET request to `/sslGateway` endpoint
 * - No additional parameters required
 * - Returns list of SSL Gateway service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List SSL Gateway Services operation.
 *
 * Retrieves all SSL Gateway services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /sslGateway
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing SSL Gateway service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/sslGateway')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
