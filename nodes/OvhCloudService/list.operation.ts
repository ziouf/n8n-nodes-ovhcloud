import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Services operation for Service resource
 *
 * Retrieves all services for the authenticated account:
 * - HTTP GET request to `/service` endpoint
 * - No additional parameters required
 * - Returns list of service IDs
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Services operation.
 *
 * Retrieves all services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /service
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service IDs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/service')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
