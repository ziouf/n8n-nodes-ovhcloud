import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Freefax Services operation for Freefax resource
 *
 * Retrieves all Freefax services for the authenticated account:
 * - HTTP GET request to `/freefax` endpoint
 * - No additional parameters required
 * - Returns list of Freefax service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Freefax Services operation.
 *
 * Retrieves all Freefax services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /freefax
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Freefax services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/freefax')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
