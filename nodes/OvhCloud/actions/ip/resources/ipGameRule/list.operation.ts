import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List game mitigation rules for an IP.
 *
 * Retrieves all game mitigation rules for a specific IP on game protection.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/game/{ipOnGame}/rule
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List Game Rules operation.
 *
 * Retrieves all game mitigation rules for a specific IP on game protection.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/game/{ipOnGame}/rule
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing game rule IDs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipOnGame = this.getNodeParameter('ipOnGame', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/game/${ipOnGame}/rule`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
