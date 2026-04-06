import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List AllDom Services operation for AllDom resource
 *
 * Retrieves all AllDom services for the authenticated account:
 * - HTTP GET request to `/allDom` endpoint
 * - No additional parameters required
 * - Returns list of AllDom service names
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List AllDom Services operation.
 *
 * Retrieves all AllDom services for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /allDom
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing AllDom services
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/allDom')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
