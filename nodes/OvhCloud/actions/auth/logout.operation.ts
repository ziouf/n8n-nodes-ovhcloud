import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * Returns the UI property definitions for the Logout operation.
 *
 * No additional parameters are required — this operation expires the
 * current credential.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no extra parameters needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Logout operation.
 *
 * Expires the current credential, effectively logging out the session.
 *
 * HTTP method: POST
 * Endpoint: /auth/logout
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results containing the logout response
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpPost('/auth/logout', { body: {} })) as IDataObject;
	return [{ json: data }];
}
