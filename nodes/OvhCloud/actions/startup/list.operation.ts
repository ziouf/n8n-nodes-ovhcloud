import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Startup Services operation for Startup resource
 *
 * Retrieves all startup services for the authenticated account:
 * - HTTP GET request to `/startup` endpoint
 * - No additional parameters required
 * - Returns list of startup service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Startup Services operation.
 *
 * Retrieves all startup services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /startup
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing startup service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/startup')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
