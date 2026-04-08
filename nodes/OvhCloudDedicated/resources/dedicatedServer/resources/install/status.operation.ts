import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Get Install Status operation
 *
 * Retrieves the installation status for a dedicated server.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/install/status
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Install Status operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${serviceName}/install/status`,
	)) as IDataObject;
	return [{ json: data }];
}
