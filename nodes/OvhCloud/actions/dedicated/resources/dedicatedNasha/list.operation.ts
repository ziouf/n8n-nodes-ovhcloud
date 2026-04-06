import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List Dedicated Nasha Services operation for DedicatedNasha resource
 *
 * Retrieves all Dedicated Nasha services for the authenticated account:
 * - HTTP GET request to `/dedicated/nasha` endpoint
 * - No additional parameters required
 * - Returns list of Dedicated Nasha service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Dedicated Nasha Services operation.
 *
 * Retrieves all Dedicated Nasha services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Dedicated Nasha services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/nasha')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
