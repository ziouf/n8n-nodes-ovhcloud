import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List License Office Services operation for LicenseOffice resource
 *
 * Retrieves all Office License services for the authenticated account:
 * - HTTP GET request to `/license/office` endpoint
 * - No additional parameters required
 * - Returns list of Office License service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List License Office Services operation.
 *
 * Retrieves all Office License services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /license/office
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Office License services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/license/office')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
