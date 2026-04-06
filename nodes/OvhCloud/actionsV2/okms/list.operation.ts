import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List OKMS Keys operation for V2 API
 *
 * Retrieves all OKMS keys:
 * - HTTP GET request to `/v2/okms` endpoint
 * - No additional parameters required
 * - Returns list of OKMS key identifiers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List OKMS Keys operation.
 *
 * Retrieves all OKMS keys.
 *
 * HTTP method: GET
 * Endpoint: /v2/okms
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing OKMS keys
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/v2/okms')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
