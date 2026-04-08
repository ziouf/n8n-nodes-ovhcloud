import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Get Service Infos operation
 *
 * Retrieves service information for a specific dedicated server.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/serviceInfos
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Service Infos operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${serviceName}/serviceInfos`,
	)) as IDataObject;
	return [{ json: data }];
}
