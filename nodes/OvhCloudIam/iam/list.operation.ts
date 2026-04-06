import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief List IAM Resources operation for V2 API
 *
 * Retrieves all IAM resources:
 * - HTTP GET request to `/v2/iam` endpoint
 * - No additional parameters required
 * - Returns list of IAM resource identifiers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List IAM Resources operation.
 *
 * Retrieves all IAM resources.
 *
 * HTTP method: GET
 * Endpoint: /v2/iam
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing IAM resources
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/v2/iam')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
