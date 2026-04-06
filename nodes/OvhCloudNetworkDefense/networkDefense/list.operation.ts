import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief List Network Defense Services operation for V2 API
 *
 * Retrieves all network defense services:
 * - HTTP GET request to `/v2/networkDefense` endpoint
 * - No additional parameters required
 * - Returns list of network defense service identifiers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Network Defense Services operation.
 *
 * Retrieves all network defense services.
 *
 * HTTP method: GET
 * Endpoint: /v2/networkDefense
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing network defense services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/v2/networkDefense')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
