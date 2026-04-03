import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List OverTheBox Services operation for OverTheBox resource
 *
 * Retrieves all OverTheBox services for the authenticated account:
 * - HTTP GET request to `/overTheBox` endpoint
 * - No additional parameters required
 * - Returns list of OverTheBox service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List OverTheBox Services operation.
 *
 * Retrieves all OverTheBox services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /overTheBox
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing OverTheBox service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/overTheBox')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
