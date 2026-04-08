import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the Get Auth Details operation.
 *
 * No additional parameters are required — this operation returns details
 * about the current authentication session.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no extra parameters needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Auth Details operation.
 *
 * Retrieves details about the current authentication session from the OVH API.
 *
 * HTTP method: GET
 * Endpoint: /auth/details
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results containing the auth details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/auth/details')) as IDataObject;
	return [{ json: data }];
}
