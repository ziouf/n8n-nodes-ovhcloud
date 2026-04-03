import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Service Options operation for Services resource
 *
 * Retrieves available options for a specific service:
 * - HTTP GET request to `/services/{serviceID}/options` endpoint
 * - Requires service ID parameter
 * - Returns list of available options with prices and descriptions
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service options
 * @throws NodeApiError if the service or options cannot be retrieved
 *
 * @example
 * // Input configuration:
 * // svcID = { name: 'my-service', value: 'my-service-id' }
 * // Output: List of available options with prices, descriptions, etc.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Service Options operation.
 *
 * Retrieves the available options for a specific service.
 *
 * HTTP method: GET
 * Endpoint: /services/{serviceID.value}/options
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service options
 * @throws NodeApiError if the service or options cannot be retrieved
 *
 * @example
 * // Input configuration:
 * // svcID = { name: 'my-service', value: 'my-service-id' }
 * // Output: List of available options with prices, descriptions, etc.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceID = this.getNodeParameter('svcID', 0, { extractValue: true }) as {
		name: string;
		value: string;
	};
	const data = (await client.httpGet(`/services/${serviceID.value}/options`)) as IDataObject;
	return [{ json: data }];
}
