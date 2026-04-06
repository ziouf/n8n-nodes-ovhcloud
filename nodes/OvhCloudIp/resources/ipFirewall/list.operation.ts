import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List IP Firewall rules for an IP block.
 *
 * Retrieves all firewall rules for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/firewall
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List IP Firewall rules operation.
 *
 * Retrieves all firewall rules for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/firewall
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing firewall rules
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/firewall`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
