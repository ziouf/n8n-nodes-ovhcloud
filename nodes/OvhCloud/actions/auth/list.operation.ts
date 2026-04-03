import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Auth Services operation for Auth resource
 *
 * Retrieves all Auth services for the authenticated account:
 * - HTTP GET request to `/auth` endpoint
 * - No additional parameters required
 * - Returns list of Auth service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Auth Services operation.
 *
 * Retrieves all Auth services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /auth
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Auth services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/auth')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
