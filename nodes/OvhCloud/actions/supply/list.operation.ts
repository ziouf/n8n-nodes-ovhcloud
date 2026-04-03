import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Supply Services operation for Supply resource
 *
 * Retrieves all Supply services for the authenticated account:
 * - HTTP GET request to `/supply/mondialRelay` endpoint
 * - No additional parameters required
 * - Returns list of Supply service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of Supply service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Supply Services operation.
 *
 * Retrieves all Supply services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /supply/mondialRelay
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Supply services
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of Supply service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/supply/mondialRelay')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
