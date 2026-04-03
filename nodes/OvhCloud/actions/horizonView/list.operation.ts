import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List HorizonView Services operation for HorizonView resource
 *
 * Retrieves all HorizonView services for the authenticated account:
 * - HTTP GET request to `/horizonView` endpoint
 * - No additional parameters required
 * - Returns list of HorizonView service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List HorizonView Services operation.
 *
 * Retrieves all HorizonView services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /horizonView
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing HorizonView services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/horizonView')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
