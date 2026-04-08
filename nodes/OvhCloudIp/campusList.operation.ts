import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * List IP Campuses operation.
 *
 * Retrieves all available IP campuses.
 *
 * HTTP method: GET
 * Endpoint: /ip/campus
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List IP Campuses operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing IP campuses
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/ip/campus')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
