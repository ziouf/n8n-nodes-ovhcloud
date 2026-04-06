/**
 * @brief Enable a CephFS filesystem for a Dedicated Ceph cluster
 *
 * Enables the specified CephFS filesystem:
 * - HTTP POST request to `/dedicated/ceph/{serviceName}/cephfs/{fsName}/enable` endpoint
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
 * Executes the Enable CephFS operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/cephfs/{fsName}/enable
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const fsName = this.getNodeParameter('fsName', 0) as string;

	const data = await client.httpPost(
		`/dedicated/ceph/${serviceName}/cephfs/${fsName}/enable`,
	);

	return [{ json: data as IDataObject }];
}
