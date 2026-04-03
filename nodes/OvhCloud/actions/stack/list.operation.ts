import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Stack Services operation for Stack resource
 *
 * Retrieves all Stack services for the authenticated account:
 * - HTTP GET request to `/stack/mis` endpoint
 * - No additional parameters required
 * - Returns list of Stack service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of Stack service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Stack Services operation.
 *
 * Retrieves all Stack services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /stack/mis
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Stack services
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of Stack service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/stack/mis')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
