/**
 * @brief List users for a Dedicated Ceph cluster
 *
 * Retrieves all users for the specified Dedicated Ceph cluster:
 * - HTTP GET request to `/dedicated/ceph/{serviceName}/user` endpoint
 * - Returns list of user names
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Users operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/user
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing user names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };

	const data = (await client.httpGet(
		`/dedicated/ceph/${serviceName}/user`,
	)) as IDataObject[];

	return data.map((item) => ({ json: item }));
}
