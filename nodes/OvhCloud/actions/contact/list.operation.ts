import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Contacts operation for Contact resource
 *
 * Retrieves all Contacts for the authenticated account:
 * - HTTP GET request to `/contact` endpoint
 * - No additional parameters required
 * - Returns list of Contact IDs
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Contacts operation.
 *
 * Retrieves all Contacts for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /contact
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Contacts
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/contact')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
