import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Metrics Services operation for Metrics resource
 *
 * Retrieves all metrics services for the authenticated account:
 * - HTTP GET request to `/metrics` endpoint
 * - No additional parameters required
 * - Returns list of metrics service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Metrics Services operation.
 *
 * Retrieves all metrics services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /metrics
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing metrics service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/metrics')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
