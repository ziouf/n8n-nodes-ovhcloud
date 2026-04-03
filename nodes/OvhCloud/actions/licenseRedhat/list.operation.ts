import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List License Redhat Services operation for LicenseRedhat resource
 *
 * Retrieves all Redhat License services for the authenticated account:
 * - HTTP GET request to `/license/redhat` endpoint
 * - No additional parameters required
 * - Returns list of Redhat License service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List License Redhat Services operation.
 *
 * Retrieves all Redhat License services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /license/redhat
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Redhat License services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/license/redhat')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
