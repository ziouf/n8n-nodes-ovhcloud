import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List SSL Services operation for SSL resource
 *
 * Retrieves all SSL services for the authenticated account:
 * - HTTP GET request to `/ssl` endpoint
 * - No additional parameters required
 * - Returns list of SSL service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List SSL Services operation.
 *
 * Retrieves all SSL services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /ssl
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing SSL service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/ssl')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
