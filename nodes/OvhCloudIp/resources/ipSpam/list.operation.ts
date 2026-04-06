import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List IP Spam entries operation.
 *
 * Retrieves all spam entries for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/spam
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List IP Spam entries operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing spam entries
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/spam`)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
