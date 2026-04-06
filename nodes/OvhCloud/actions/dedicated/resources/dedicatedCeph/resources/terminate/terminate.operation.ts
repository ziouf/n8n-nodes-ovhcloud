/**
 * @brief Request termination for a Dedicated Ceph cluster
 *
 * Requests termination of the specified Dedicated Ceph cluster:
 * - HTTP POST request to `/dedicated/ceph/{serviceName}/terminate` endpoint
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Terminate operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/terminate
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };

	const data = await client.httpPost(
		`/dedicated/ceph/${serviceName}/terminate`,
	);

	return [{ json: data as IDataObject }];
}
