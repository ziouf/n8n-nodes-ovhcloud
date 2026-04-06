import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * Returns the UI property definitions for the Get Server Time operation.
 *
 * No additional parameters are required — this operation returns the
 * current epoch time of the OVH servers.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no extra parameters needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Server Time operation.
 *
 * Retrieves the current time of the OVH servers as an epoch timestamp.
 *
 * HTTP method: GET
 * Endpoint: /auth/time
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results containing the server time
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/auth/time')) as IDataObject;
	return [{ json: data }];
}
