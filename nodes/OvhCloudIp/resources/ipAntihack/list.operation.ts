import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief List IP Antihack entries operation
 *
 * Retrieves all antihack entries for a specific IP block:
 * - HTTP GET request to `/ip/{ipBlock}/antihack` endpoint
 * - IP block parameter is required
 * - Returns list of antihack entry identifiers
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List IP Antihack entries operation.
 *
 * Retrieves all antihack entries for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/antihack
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing antihack entries
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/antihack`)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
