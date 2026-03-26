import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Service operation for Services resource
 *
 * Retrieves detailed information for a specific service:
 * - HTTP GET request to `/services/{serviceID}` endpoint
 * - Requires service ID parameter
 * - Returns complete service details with state, options, upgrades, etc.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service details
 * @throws NodeApiError if the service is not found
 *
 * @example
 * // Input configuration:
 * // svcID = { name: 'my-service', value: 'my-service-id' }
 * // Output: Service details with state, options, upgrades, etc.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Service operation.
 *
 * Retrieves the details of a specific service by its ID.
 *
 * HTTP method: GET
 * Endpoint: /services/{serviceID.value}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service details
 * @throws NodeApiError if the service is not found
 *
 * @example
 * // Input configuration:
 * // svcID = { name: 'my-service', value: 'my-service-id' }
 * // Output: Service details with state, options, upgrades, etc.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceID = this.getNodeParameter('svcID', 0, { extractValue: true }) as {
		name: string;
		value: string;
	};
	const data = (await client.httpGet(`/services/${serviceID.value}`)) as IDataObject;
	return [{ json: data }];
}
