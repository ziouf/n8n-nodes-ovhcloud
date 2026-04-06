import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Notifications operation for V2 API
 *
 * Retrieves all notifications:
 * - HTTP GET request to `/v2/notification` endpoint
 * - No additional parameters required
 * - Returns list of notification identifiers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Notifications operation.
 *
 * Retrieves all notifications.
 *
 * HTTP method: GET
 * Endpoint: /v2/notification
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing notifications
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/v2/notification')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
