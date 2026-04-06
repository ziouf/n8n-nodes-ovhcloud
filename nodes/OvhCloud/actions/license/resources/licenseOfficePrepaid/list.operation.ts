import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List License Office Prepaid Services operation for LicenseOfficePrepaid resource
 *
 * Retrieves all Office Prepaid License services for the authenticated account:
 * - HTTP GET request to `/license/officePrepaid` endpoint
 * - No additional parameters required
 * - Returns list of Office Prepaid License service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List License Office Prepaid Services operation.
 *
 * Retrieves all Office Prepaid License services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /license/officePrepaid
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Office Prepaid License services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/license/officePrepaid')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
