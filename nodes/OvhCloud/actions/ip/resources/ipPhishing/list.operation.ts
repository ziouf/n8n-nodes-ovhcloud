import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List IP Phishing entries operation.
 *
 * Retrieves all anti-phishing entries for a specific IP block.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/phishing
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List IP Phishing entries operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing phishing entries
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/phishing`)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
