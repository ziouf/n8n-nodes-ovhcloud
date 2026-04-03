import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Web Hosting Services operation for V2 API
 *
 * Retrieves all web hosting services:
 * - HTTP GET request to `/v2/webhosting` endpoint
 * - No additional parameters required
 * - Returns list of web hosting service identifiers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Web Hosting Services operation.
 *
 * Retrieves all web hosting services.
 *
 * HTTP method: GET
 * Endpoint: /v2/webhosting
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing web hosting services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/v2/webhosting')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
