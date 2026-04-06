import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Connectivity Services operation for Connectivity resource
 *
 * Retrieves all Connectivity services for the authenticated account:
 * - HTTP GET request to `/connectivity` endpoint
 * - No additional parameters required
 * - Returns list of Connectivity service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Connectivity Services operation.
 *
 * Retrieves all Connectivity services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /connectivity
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Connectivity services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/connectivity')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
