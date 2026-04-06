/**
 * @brief Disable a CephFS filesystem for a Dedicated Ceph cluster
 *
 * Disables the specified CephFS filesystem:
 * - HTTP POST request to `/dedicated/ceph/{serviceName}/cephfs/{fsName}/disable` endpoint
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
 * Executes the Disable CephFS operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/cephfs/{fsName}/disable
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
		`/dedicated/ceph/${serviceName}/cephfs/${fsName}/disable`,
	);

	return [{ json: data as IDataObject }];
}
