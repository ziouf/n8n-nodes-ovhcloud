import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List New Account Services operation for New Account resource
 *
 * Retrieves all New Account services for the authenticated account:
 * - HTTP GET request to `/newAccount` endpoint
 * - No additional parameters required
 * - Returns list of New Account service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of New Account service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List New Account Services operation.
 *
 * Retrieves all New Account services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /newAccount
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing New Account services
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of New Account service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/newAccount')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
