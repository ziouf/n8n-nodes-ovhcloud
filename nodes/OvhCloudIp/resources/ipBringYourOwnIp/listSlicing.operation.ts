import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List available slicing configurations for BYOIP.
 *
 * Retrieves available slicing configurations for a BYOIP Additional IP.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/bringYourOwnIp/slice
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List BYOIP Slicing operation.
 *
 * Retrieves available slicing configurations for a BYOIP Additional IP.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/bringYourOwnIp/slice
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing slicing previews
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/bringYourOwnIp/slice`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
