import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Email Exchange Services operation for EmailExchange resource
 *
 * Retrieves all Email Exchange services for the authenticated account:
 * - HTTP GET request to `/email/exchange` endpoint
 * - No additional parameters required
 * - Returns list of Email Exchange service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Email Exchange Services operation.
 *
 * Retrieves all Email Exchange services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /email/exchange
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Email Exchange services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/email/exchange')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
