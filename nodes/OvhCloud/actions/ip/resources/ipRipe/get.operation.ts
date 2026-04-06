import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get IP RIPE information operation.
 *
 * Retrieves RIPE information for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/ripe
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get IP RIPE information operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing RIPE information
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/ripe`)) as IDataObject;
	return [{ json: data }];
}
