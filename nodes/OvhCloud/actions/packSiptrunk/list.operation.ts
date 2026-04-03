import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Pack SIP Trunk Services operation for Pack SIP Trunk resource
 *
 * Retrieves all Pack SIP Trunk services for the authenticated account:
 * - HTTP GET request to `/pack/siptrunk` endpoint
 * - No additional parameters required
 * - Returns list of Pack SIP Trunk service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of Pack SIP Trunk service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Pack SIP Trunk Services operation.
 *
 * Retrieves all Pack SIP Trunk services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /pack/siptrunk
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Pack SIP Trunk services
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of Pack SIP Trunk service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/pack/siptrunk')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
