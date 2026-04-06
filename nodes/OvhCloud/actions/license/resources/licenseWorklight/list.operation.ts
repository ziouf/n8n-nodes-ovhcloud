import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List License Worklight Services operation for LicenseWorklight resource
 *
 * Retrieves all Worklight License services for the authenticated account:
 * - HTTP GET request to `/license/worklight` endpoint
 * - No additional parameters required
 * - Returns list of Worklight License service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List License Worklight Services operation.
 *
 * Retrieves all Worklight License services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /license/worklight
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Worklight License services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/license/worklight')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
