import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List License Cpanel Services operation for LicenseCpanel resource
 *
 * Retrieves all Cpanel License services for the authenticated account:
 * - HTTP GET request to `/license/cpanel` endpoint
 * - No additional parameters required
 * - Returns list of Cpanel License service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List License Cpanel Services operation.
 *
 * Retrieves all Cpanel License services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /license/cpanel
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Cpanel License services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/license/cpanel')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
