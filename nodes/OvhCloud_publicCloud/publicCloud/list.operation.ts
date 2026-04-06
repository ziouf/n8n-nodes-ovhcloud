import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief List Public Cloud Services operation for V2 API
 *
 * Retrieves all Public Cloud services:
 * - HTTP GET request to `/v2/publicCloud` endpoint
 * - No additional parameters required
 * - Returns list of Public Cloud service identifiers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Public Cloud Services operation.
 *
 * Retrieves all Public Cloud services.
 *
 * HTTP method: GET
 * Endpoint: /v2/publicCloud
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Public Cloud services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/v2/publicCloud')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
