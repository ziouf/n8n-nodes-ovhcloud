import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * Returns the UI property definitions for the Generate Token operation.
 *
 * No additional parameters are required — this operation generates a
 * one-time authentication token.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no extra parameters needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Generate Token operation.
 *
 * Generates a one-time authentication token for the current credential.
 *
 * HTTP method: POST
 * Endpoint: /auth/token
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results containing the generated token
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpPost('/auth/token', { body: {} })) as IDataObject;
	return [{ json: data }];
}
