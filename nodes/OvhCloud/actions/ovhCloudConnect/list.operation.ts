import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List OVH Cloud Connect Services operation for OVH Cloud Connect resource
 *
 * Retrieves all OVH Cloud Connect services for the authenticated account:
 * - HTTP GET request to `/ovhCloudConnect` endpoint
 * - No additional parameters required
 * - Returns list of OVH Cloud Connect service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List OVH Cloud Connect Services operation.
 *
 * Retrieves all OVH Cloud Connect services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /ovhCloudConnect
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing OVH Cloud Connect service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/ovhCloudConnect')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
