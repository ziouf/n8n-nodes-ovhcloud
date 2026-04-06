import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Backup Services operation for V2 API
 *
 * Retrieves all backup services for the authenticated account:
 * - HTTP GET request to `/v2/backupServices` endpoint
 * - No additional parameters required
 * - Returns list of backup service identifiers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Backup Services operation.
 *
 * Retrieves all backup services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /v2/backupServices
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing backup services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/v2/backupServices')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
