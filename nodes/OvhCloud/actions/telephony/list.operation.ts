import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Telephony Services operation for Telephony resource
 *
 * Retrieves all telephony services for the authenticated account:
 * - HTTP GET request to `/telephony` endpoint
 * - No additional parameters required
 * - Returns list of telephony service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of telephony service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Telephony Services operation.
 *
 * Retrieves all telephony services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /telephony
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing telephony services
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of telephony service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
