/**
 * @brief List tasks for a Dedicated Ceph cluster
 *
 * Retrieves all tasks for the specified Dedicated Ceph cluster:
 * - HTTP GET request to `/dedicated/ceph/{serviceName}/task` endpoint
 * - Returns list of task IDs
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Tasks operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/task
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing task IDs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };

	const data = (await client.httpGet(
		`/dedicated/ceph/${serviceName}/task`,
	)) as IDataObject[];

	return data.map((item) => ({ json: item }));
}
