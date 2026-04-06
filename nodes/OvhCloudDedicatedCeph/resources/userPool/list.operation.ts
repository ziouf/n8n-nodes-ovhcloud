/**
 * @brief List user-pool permissions for a Dedicated Ceph cluster
 *
 * Retrieves all user-pool permissions for the specified user:
 * - HTTP GET request to `/dedicated/ceph/{serviceName}/user/{userName}/pool` endpoint
 * - Returns list of pool names the user has permissions for
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
 * Executes the List User Pools operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/user/{userName}/pool
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing pool names
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const userName = this.getNodeParameter('userName', 0) as string;

	const data = (await client.httpGet(
		`/dedicated/ceph/${serviceName}/user/${userName}/pool`,
	)) as IDataObject[];

	return data.map((item) => ({ json: item }));
}
