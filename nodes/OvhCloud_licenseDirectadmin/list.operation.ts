import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List License Directadmin Services operation for LicenseDirectadmin resource
 *
 * Retrieves all Directadmin License services for the authenticated account:
 * - HTTP GET request to `/license/directadmin` endpoint
 * - No additional parameters required
 * - Returns list of Directadmin License service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List License Directadmin Services operation.
 *
 * Retrieves all Directadmin License services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /license/directadmin
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Directadmin License services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/license/directadmin')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
