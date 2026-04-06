import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * List IP Services operation.
 *
 * Retrieves all IP services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /ip/service
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List IP Services operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing IP service identifiers
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/ip/service')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
