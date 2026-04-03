import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List SaaS Services operation for SaaS resource
 *
 * Retrieves all SaaS services for the authenticated account:
 * - HTTP GET request to `/saas/csp2` endpoint
 * - No additional parameters required
 * - Returns list of SaaS service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of SaaS service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List SaaS Services operation.
 *
 * Retrieves all SaaS services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /saas/csp2
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing SaaS services
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of SaaS service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/saas/csp2')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
