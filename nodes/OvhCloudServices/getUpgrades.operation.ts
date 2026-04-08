import { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get Service Upgrades operation for Services resource
 *
 * Retrieves available upgrades for a specific service:
 * - HTTP GET request to `/services/{serviceID}/upgrade` endpoint
 * - Requires service ID parameter
 * - Returns upgrade paths with pricing and specifications
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service upgrades
 * @throws NodeApiError if the service upgrades cannot be retrieved
 *
 * @example
 * // Input configuration:
 * // svcID = { name: 'my-service', value: 'my-service-id' }
 * // Output: List of available upgrade offers with prices and specifications
 */
export function description(): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Service Upgrades operation.
 *
 * Retrieves the available upgrades for a specific service, showing
 * potential upgrade paths and their costs.
 *
 * HTTP method: GET
 * Endpoint: /services/{serviceID.value}/upgrade
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service upgrades
 * @throws NodeApiError if the service upgrades cannot be retrieved
 *
 * @example
 * // Input configuration:
 * // svcID = { name: 'my-service', value: 'my-service-id' }
 * // Output: List of available upgrade offers with prices and specifications
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceID = this.getNodeParameter('svcID', 0, { extractValue: true }) as {
		name: string;
		value: string;
	};
	const data = (await client.httpGet(`/services/${serviceID.value}/upgrade`)) as IDataObject;
	return [{ json: data }];
}
