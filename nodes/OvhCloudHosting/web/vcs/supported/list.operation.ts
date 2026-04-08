import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Get list of supported VCS platforms operation for Web Hosting
 *
 * HTTP GET request to `/hosting/web/vcs/supported` endpoint.
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
 * Executes the Get list of supported VCS platforms operation.
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/vcs/supported
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/hosting/web/vcs/supported`)) as IDataObject;
	return this.helpers.returnJsonArray(data as unknown as IDataObject[]);
}
