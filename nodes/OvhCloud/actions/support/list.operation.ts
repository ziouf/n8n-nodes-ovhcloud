import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Support Tickets operation for Support resource
 *
 * Retrieves all support tickets for the authenticated account:
 * - HTTP GET request to `/support` endpoint
 * - No additional parameters required
 * - Returns list of support ticket IDs
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Support Tickets operation.
 *
 * Retrieves all support tickets for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /support
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing support ticket IDs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/support')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
