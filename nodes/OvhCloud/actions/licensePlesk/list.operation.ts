import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List License Plesk Services operation for LicensePlesk resource
 *
 * Retrieves all Plesk License services for the authenticated account:
 * - HTTP GET request to `/license/plesk` endpoint
 * - No additional parameters required
 * - Returns list of Plesk License service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List License Plesk Services operation.
 *
 * Retrieves all Plesk License services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /license/plesk
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Plesk License services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/license/plesk')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
