import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief List License Sqlserver Services operation for LicenseSqlserver resource
 *
 * Retrieves all Sqlserver License services for the authenticated account:
 * - HTTP GET request to `/license/sqlserver` endpoint
 * - No additional parameters required
 * - Returns list of Sqlserver License service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List License Sqlserver Services operation.
 *
 * Retrieves all Sqlserver License services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /license/sqlserver
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Sqlserver License services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/license/sqlserver')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
