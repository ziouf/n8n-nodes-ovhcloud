import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * List tenant pending tasks for an Office Prepaid license.
 *
 * HTTP method: GET
 * Endpoint: /license/officePrepaid/{serviceName}/tenantPendingTask
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Tenant Pending Tasks operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(
		`/license/officePrepaid/${serviceName}/tenantPendingTask`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
