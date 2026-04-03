import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Pack xDSL Services operation for Pack xDSL resource
 *
 * Retrieves all Pack xDSL services for the authenticated account:
 * - HTTP GET request to `/pack/xdsl` endpoint
 * - No additional parameters required
 * - Returns list of Pack xDSL service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of Pack xDSL service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Pack xDSL Services operation.
 *
 * Retrieves all Pack xDSL services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /pack/xdsl
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Pack xDSL services
 *
 * @example
 * // Input: No parameters required
 * // Output: Array of Pack xDSL service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/pack/xdsl')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
