import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Partners operation for Partner resource
 *
 * Retrieves all partners for the authenticated account:
 * - HTTP GET request to `/partner` endpoint
 * - No additional parameters required
 * - Returns list of partner IDs
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Partners operation.
 *
 * Retrieves all partners for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /partner
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing partner IDs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/partner')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
