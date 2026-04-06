import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * Returns the UI property definitions for the Get Current Credential operation.
 *
 * No additional parameters are required — this operation returns details
 * about the credential currently in use.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no extra parameters needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Current Credential operation.
 *
 * Retrieves details about the credential currently being used for authentication.
 *
 * HTTP method: GET
 * Endpoint: /auth/currentCredential
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results containing the credential details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/auth/currentCredential')) as IDataObject;
	return [{ json: data }];
}
