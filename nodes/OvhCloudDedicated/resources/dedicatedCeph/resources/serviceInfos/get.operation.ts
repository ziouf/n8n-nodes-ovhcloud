/**
 * @brief Get service info for a Dedicated Ceph cluster
 *
 * Retrieves service information for the specified Dedicated Ceph cluster:
 * - HTTP GET request to `/dedicated/ceph/{serviceName}/serviceInfos` endpoint
 * - Returns service info details
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Service Info operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/serviceInfos
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service info
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };

	const data = (await client.httpGet(`/dedicated/ceph/${serviceName}/serviceInfos`)) as IDataObject;

	return [{ json: data }];
}
