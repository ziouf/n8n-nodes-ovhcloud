import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get Partner Status operation for Partner resource
 *
 * Retrieves partner status for the authenticated account:
 * - HTTP GET request to `/partner` endpoint
 * - No additional parameters required
 * - Returns partner status details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Partner Status operation.
 *
 * Retrieves partner status for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /partner
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing partner status
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/partner')) as IDataObject;
	return [{ json: data }];
}
