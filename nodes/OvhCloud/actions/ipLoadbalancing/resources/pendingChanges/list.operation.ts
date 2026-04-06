import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List pending changes on an IP Load Balancer configuration, per zone.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/pendingChanges
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Pending Changes operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(
		`/ipLoadbalancing/${serviceName}/pendingChanges`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
