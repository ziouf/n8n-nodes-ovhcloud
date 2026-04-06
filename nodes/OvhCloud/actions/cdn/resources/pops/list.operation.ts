import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief List CDN PoPs operation
 *
 * Retrieves all Points of Presence (PoPs) for the CDN Dedicated service.
 * This is a global endpoint that does not require a service name.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/pops
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function descriptionPopsList(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the List CDN PoPs operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing PoP names
 */
export async function executePopsList(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const response = (await client.httpGet('/cdn/dedicated/pops')) as IDataObject[];

	return this.helpers.returnJsonArray(response);
}
