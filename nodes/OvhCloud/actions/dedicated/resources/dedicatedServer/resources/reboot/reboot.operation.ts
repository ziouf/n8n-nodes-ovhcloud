import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Reboot Dedicated Server operation
 *
 * Performs a hard reboot of a specific dedicated server.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/reboot
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Reboot operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const data = (await client.httpPost(
		`/dedicated/server/${serviceName}/reboot`,
	)) as IDataObject;
	return [{ json: data }];
}
