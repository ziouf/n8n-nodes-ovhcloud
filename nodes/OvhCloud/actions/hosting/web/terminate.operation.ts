import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../transport/ApiClient';

/**
 * @brief Ask for the termination of your service operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/terminate` endpoint.
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
 * Executes the Ask for the termination of your service operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/terminate
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/terminate`)) as IDataObject;
	return [{ json: data }];
}
