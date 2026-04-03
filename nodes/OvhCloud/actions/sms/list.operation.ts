import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List SMS Services operation for SMS resource
 *
 * Retrieves all SMS services for the authenticated account:
 * - HTTP GET request to `/sms` endpoint
 * - No additional parameters required
 * - Returns list of SMS service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List SMS Services operation.
 *
 * Retrieves all SMS services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /sms
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing SMS service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/sms')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
