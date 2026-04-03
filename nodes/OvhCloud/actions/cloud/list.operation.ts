import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Cloud Services operation for Cloud resource
 *
 * Retrieves all Cloud services for the authenticated account:
 * - HTTP GET request to `/cloud` endpoint
 * - No additional parameters required
 * - Returns list of Cloud service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Cloud Services operation.
 *
 * Retrieves all Cloud services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /cloud
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Cloud services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/cloud')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
