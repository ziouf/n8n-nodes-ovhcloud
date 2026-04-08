import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List DBaaS Log Services operation for DBaaS resource
 *
 * Retrieves all DBaaS log services for the authenticated account:
 * - HTTP GET request to `/dbaas/logs` endpoint
 * - No additional parameters required
 * - Returns list of DBaaS log service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List DBaaS Log Services operation.
 *
 * Retrieves all DBaaS log services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing DBaaS log service names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dbaas/logs')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
