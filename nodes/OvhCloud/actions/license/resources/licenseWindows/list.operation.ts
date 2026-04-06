import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List License Windows Services operation for LicenseWindows resource
 *
 * Retrieves all Windows License services for the authenticated account:
 * - HTTP GET request to `/license/windows` endpoint
 * - No additional parameters required
 * - Returns list of Windows License service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List License Windows Services operation.
 *
 * Retrieves all Windows License services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /license/windows
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Windows License services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/license/windows')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
