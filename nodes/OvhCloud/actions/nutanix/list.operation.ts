import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Nutanix Services operation for Nutanix resource
 *
 * Retrieves all Nutanix services for the authenticated account:
 * - HTTP GET request to `/nutanix` endpoint
 * - No additional parameters required
 * - Returns list of Nutanix service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Nutanix Services operation.
 *
 * Retrieves all Nutanix services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /nutanix
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Nutanix service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/nutanix')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
