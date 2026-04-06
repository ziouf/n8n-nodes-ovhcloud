import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get allowed destination IPs for a Directadmin license.
 *
 * HTTP method: GET
 * Endpoint: /license/directadmin/{serviceName}/allowedDestinationIp
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Allowed Destination IP operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(
		`/license/directadmin/${serviceName}/allowedDestinationIp`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
