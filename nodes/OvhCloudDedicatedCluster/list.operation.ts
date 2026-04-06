import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Dedicated Cluster Services operation for DedicatedCluster resource
 *
 * Retrieves all Dedicated Cluster services for the authenticated account:
 * - HTTP GET request to `/dedicated/cluster` endpoint
 * - No additional parameters required
 * - Returns list of Dedicated Cluster service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Dedicated Cluster Services operation.
 *
 * Retrieves all Dedicated Cluster services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/cluster
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Dedicated Cluster services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/cluster')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
