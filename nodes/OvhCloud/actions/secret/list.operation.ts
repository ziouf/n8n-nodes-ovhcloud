import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Secret Services operation for Secret resource
 *
 * Retrieves all secret services for the authenticated account:
 * - HTTP GET request to `/secret` endpoint
 * - No additional parameters required
 * - Returns list of secret service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Secret Services operation.
 *
 * Retrieves all secret services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /secret
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing secret service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/secret')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
