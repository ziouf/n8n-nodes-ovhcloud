import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get IP Specifications operation
 *
 * Retrieves IP capabilities for a specific dedicated server.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/specifications/ip
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get IP Specifications operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${serviceName}/specifications/ip`,
	)) as IDataObject;
	return [{ json: data }];
}
