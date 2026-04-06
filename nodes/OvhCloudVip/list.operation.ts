import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List VIP Services operation for VIP resource
 *
 * Retrieves all VIP services for the authenticated account:
 * - HTTP GET request to `/vip` endpoint
 * - No additional parameters required
 * - Returns list of VIP service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of VIP service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List VIP Services operation.
 *
 * Retrieves all VIP services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /vip
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing VIP services
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of VIP service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/vip')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
