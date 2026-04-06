import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief List Dedicated Installation Templates operation for DedicatedInstallationTemplate resource
 *
 * Retrieves all Dedicated Installation Templates for the authenticated account:
 * - HTTP GET request to `/dedicated/installationTemplate` endpoint
 * - No additional parameters required
 * - Returns list of Dedicated Installation Template names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Dedicated Installation Templates operation.
 *
 * Retrieves all Dedicated Installation Templates for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Dedicated Installation Templates
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/installationTemplate')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
