import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Email Mxplan Services operation for EmailMxplan resource
 *
 * Retrieves all Email Mxplan services for the authenticated account:
 * - HTTP GET request to `/email/mxplan` endpoint
 * - No additional parameters required
 * - Returns list of Email Mxplan service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Email Mxplan Services operation.
 *
 * Retrieves all Email Mxplan services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Email Mxplan services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/email/mxplan')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
