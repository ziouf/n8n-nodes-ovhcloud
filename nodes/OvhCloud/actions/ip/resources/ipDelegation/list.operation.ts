import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List reverse delegation targets for an IPv6 subnet.
 *
 * Retrieves all reverse delegation targets for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/delegation
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Delegation operation.
 *
 * Retrieves all reverse delegation targets for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/delegation
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing delegation targets
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/delegation`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
