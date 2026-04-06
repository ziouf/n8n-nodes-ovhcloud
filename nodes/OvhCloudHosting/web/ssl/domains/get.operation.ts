import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Get list of domains linked to the hosted SSL operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/ssl/domains` endpoint.
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
 * Executes the Get list of domains linked to the hosted SSL operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/ssl/domains
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/hosting/web/${serviceName}/ssl/domains`)) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
