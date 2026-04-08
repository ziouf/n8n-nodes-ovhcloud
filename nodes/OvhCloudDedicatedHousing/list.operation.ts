import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Dedicated Housing Services operation for DedicatedHousing resource
 *
 * Retrieves all Dedicated Housing services for the authenticated account:
 * - HTTP GET request to `/dedicated/housing` endpoint
 * - No additional parameters required
 * - Returns list of Dedicated Housing service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Dedicated Housing Services operation.
 *
 * Retrieves all Dedicated Housing services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Dedicated Housing services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/housing')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
