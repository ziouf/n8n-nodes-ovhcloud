import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Veeam Cloud Connect Services operation for Veeam Cloud Connect resource
 *
 * Retrieves all Veeam Cloud Connect services for the authenticated account:
 * - HTTP GET request to `/veeamCloudConnect` endpoint
 * - No additional parameters required
 * - Returns list of Veeam Cloud Connect service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of Veeam Cloud Connect service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Veeam Cloud Connect Services operation.
 *
 * Retrieves all Veeam Cloud Connect services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /veeamCloudConnect
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Veeam Cloud Connect services
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of Veeam Cloud Connect service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/veeamCloudConnect')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
