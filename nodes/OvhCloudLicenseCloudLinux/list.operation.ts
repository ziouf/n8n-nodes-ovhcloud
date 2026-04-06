import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List License CloudLinux Services operation for LicenseCloudLinux resource
 *
 * Retrieves all Cloud Linux License services for the authenticated account:
 * - HTTP GET request to `/license/cloudLinux` endpoint
 * - No additional parameters required
 * - Returns list of Cloud Linux License service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List License CloudLinux Services operation.
 *
 * Retrieves all Cloud Linux License services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /license/cloudLinux
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Cloud Linux License services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/license/cloudLinux')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
