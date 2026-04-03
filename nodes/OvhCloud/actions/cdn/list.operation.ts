import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List CDN Dedicated Services operation for CDN resource
 *
 * Retrieves all CDN Dedicated services for the authenticated account:
 * - HTTP GET request to `/cdn/dedicated` endpoint
 * - No additional parameters required
 * - Returns list of CDN Dedicated service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List CDN Dedicated Services operation.
 *
 * Retrieves all CDN Dedicated services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing CDN Dedicated services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/cdn/dedicated')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
