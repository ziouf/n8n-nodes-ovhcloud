import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Storage Services operation for Storage resource
 *
 * Retrieves all storage services for the authenticated account:
 * - HTTP GET request to `/storage` endpoint
 * - No additional parameters required
 * - Returns list of storage service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Storage Services operation.
 *
 * Retrieves all storage services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /storage
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing storage service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/storage')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
