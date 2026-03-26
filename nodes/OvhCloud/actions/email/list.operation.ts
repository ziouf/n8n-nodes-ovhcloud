import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Email Domains operation for Email resource
 *
 * Retrieves all email domains for the authenticated account:
 * - HTTP GET request to `/email/domain` endpoint
 * - No additional parameters required
 * - Returns list of email domain names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of email domain names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Email Domains operation.
 *
 * Retrieves all email domains for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /email/domain
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing email domains
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of email domain names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/email/domain')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
