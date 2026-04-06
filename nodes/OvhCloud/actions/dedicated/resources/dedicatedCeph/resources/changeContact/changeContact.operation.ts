/**
 * @brief Change contact for a Dedicated Ceph cluster
 *
 * Changes the contact for the specified Dedicated Ceph cluster:
 * - HTTP POST request to `/dedicated/ceph/{serviceName}/changeContact` endpoint
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
 * Executes the Change Contact operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/changeContact
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
		`/dedicated/ceph/${serviceName}/changeContact`,
	);

	return [{ json: data as IDataObject }];
}
