import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List Managed CMS Services operation for V2 API
 *
 * Retrieves all managed CMS services:
 * - HTTP GET request to `/v2/managedCMS` endpoint
 * - No additional parameters required
 * - Returns list of managed CMS service identifiers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Managed CMS Services operation.
 *
 * Retrieves all managed CMS services.
 *
 * HTTP method: GET
 * Endpoint: /v2/managedCMS
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing managed CMS services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/v2/managedCMS')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
