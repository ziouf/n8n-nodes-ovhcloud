import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/**
 * @brief List Dedicated Ceph Services operation for DedicatedCeph resource
 *
 * Retrieves all Dedicated Ceph services for the authenticated account:
 * - HTTP GET request to `/dedicated/ceph` endpoint
 * - No additional parameters required
 * - Returns list of Dedicated Ceph service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Dedicated Ceph Services operation.
 *
 * Retrieves all Dedicated Ceph services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Dedicated Ceph services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/ceph')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
