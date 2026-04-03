import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Veeam Enterprise Services operation for Veeam Enterprise resource
 *
 * Retrieves all Veeam Enterprise services for the authenticated account:
 * - HTTP GET request to `/veeam/veeamEnterprise` endpoint
 * - No additional parameters required
 * - Returns list of Veeam Enterprise service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of Veeam Enterprise service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Veeam Enterprise Services operation.
 *
 * Retrieves all Veeam Enterprise services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /veeam/veeamEnterprise
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Veeam Enterprise services
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of Veeam Enterprise service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/veeam/veeamEnterprise')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
