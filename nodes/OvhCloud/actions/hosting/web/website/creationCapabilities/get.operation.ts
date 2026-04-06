import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Get website creation capabilities of the hosting operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/websiteCreationCapabilities` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
	];
}

/**
 * Executes the Get website creation capabilities of the hosting operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/websiteCreationCapabilities
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/websiteCreationCapabilities`)) as IDataObject;
	return [{ json: data }];
}
