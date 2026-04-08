import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * Get Service Infos operation.
 *
 * Retrieves service information for an IP service.
 *
 * HTTP method: GET
 * Endpoint: /ip/service/{serviceName}/serviceInfos
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Service Infos operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service information
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/ip/service/${serviceName}/serviceInfos`)) as IDataObject;
	return [{ json: data }];
}
