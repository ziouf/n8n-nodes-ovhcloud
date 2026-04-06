/**
 * @brief Get cluster health for a Dedicated Ceph cluster
 *
 * Retrieves the health status of the Dedicated Ceph cluster:
 * - HTTP GET request to `/dedicated/ceph/{serviceName}/health` endpoint
 * - Returns cluster health details
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
 * Executes the Get Health operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/health
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing cluster health
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };

	const data = (await client.httpGet(
		`/dedicated/ceph/${serviceName}/health`,
	)) as IDataObject;

	return [{ json: data }];
}
