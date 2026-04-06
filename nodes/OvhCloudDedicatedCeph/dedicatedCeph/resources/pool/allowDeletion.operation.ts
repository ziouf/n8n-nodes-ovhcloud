/**
 * @brief Allow pool deletion for a Dedicated Ceph cluster
 *
 * Allows deletion of the specified pool (5-minute window):
 * - HTTP PUT request to `/dedicated/ceph/{serviceName}/pool/{poolName}/allowDeletion` endpoint
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
 * Executes the Allow Pool Deletion operation.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/ceph/{serviceName}/pool/{poolName}/allowDeletion
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const poolName = this.getNodeParameter('poolName', 0) as string;

	const data = await client.httpPut(
		`/dedicated/ceph/${serviceName}/pool/${poolName}/allowDeletion`,
	);

	return [{ json: data as IDataObject }];
}
