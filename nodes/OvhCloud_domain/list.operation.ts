import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Domains operation for Domain resource
 *
 * Retrieves all domains for the authenticated account:
 * - HTTP GET request to `/domain` endpoint
 * - No additional parameters required
 * - Returns list of domain names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Domains operation.
 *
 * Retrieves all domains for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /domain
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing domains
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/domain')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
