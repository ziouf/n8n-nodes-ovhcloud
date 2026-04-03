import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Email Pro Services operation for EmailPro resource
 *
 * Retrieves all Email Pro services for the authenticated account:
 * - HTTP GET request to `/email/pro` endpoint
 * - No additional parameters required
 * - Returns list of Email Pro service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Email Pro Services operation.
 *
 * Retrieves all Email Pro services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /email/pro
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Email Pro services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/email/pro')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
