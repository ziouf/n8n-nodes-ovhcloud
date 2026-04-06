import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List License Hycu Services operation for LicenseHycu resource
 *
 * Retrieves all Hycu License services for the authenticated account:
 * - HTTP GET request to `/license/hycu` endpoint
 * - No additional parameters required
 * - Returns list of Hycu License service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List License Hycu Services operation.
 *
 * Retrieves all Hycu License services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /license/hycu
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Hycu License services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/license/hycu')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
