import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief List Dedicated Cloud Services operation for Dedicated Cloud resource
 *
 * Retrieves all Dedicated Cloud services for the authenticated account:
 * - HTTP GET request to `/dedicatedCloud` endpoint
 * - No additional parameters required
 * - Returns list of Dedicated Cloud service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Dedicated Cloud Services operation.
 *
 * Retrieves all Dedicated Cloud services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Dedicated Cloud service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicatedCloud')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
