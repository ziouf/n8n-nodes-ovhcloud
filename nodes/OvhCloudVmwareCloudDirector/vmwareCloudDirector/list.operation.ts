import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief List VMware Cloud Director Services operation for V2 API
 *
 * Retrieves all VMware Cloud Director services:
 * - HTTP GET request to `/v2/vmwareCloudDirector` endpoint
 * - No additional parameters required
 * - Returns list of VMware Cloud Director service identifiers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List VMware Cloud Director Services operation.
 *
 * Retrieves all VMware Cloud Director services.
 *
 * HTTP method: GET
 * Endpoint: /v2/vmwareCloudDirector
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing VMware Cloud Director services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/v2/vmwareCloudDirector')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
