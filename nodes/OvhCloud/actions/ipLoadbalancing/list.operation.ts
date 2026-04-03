import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List IP Load Balancers operation for IP Load Balancing resource
 *
 * Retrieves all IP Load Balancers for the authenticated account:
 * - HTTP GET request to `/ipLoadbalancing` endpoint
 * - No additional parameters required
 * - Returns list of IP Load Balancer service names
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Empty array (no additional UI properties needed)
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List IP Load Balancers operation.
 *
 * Retrieves all IP Load Balancers for the authenticated account.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing IP Load Balancers
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/ipLoadbalancing')) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
