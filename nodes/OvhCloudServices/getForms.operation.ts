import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get Service Forms operation for Services resource
 *
 * Retrieves available forms for a specific service:
 * - HTTP GET request to `/services/{serviceID}/form` endpoint
 * - Requires service ID parameter
 * - Returns configuration forms for setup or upgrade processes
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service forms
 * @throws NodeApiError if the service forms cannot be retrieved
 *
 * @example
 * // Input configuration:
 * // svcID = { name: 'my-service', value: 'my-service-id' }
 * // Output: List of configuration forms with fields and types
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Service Forms operation.
 *
 * Retrieves the available forms for a specific service, typically used
 * for configuration or upgrade processes.
 *
 * HTTP method: GET
 * Endpoint: /services/{serviceID.value}/form
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service forms
 * @throws NodeApiError if the service forms cannot be retrieved
 *
 * @example
 * // Input configuration:
 * // svcID = { name: 'my-service', value: 'my-service-id' }
 * // Output: List of configuration forms with fields and types
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceID = this.getNodeParameter('svcID', 0, { extractValue: true }) as {
		name: string;
		value: string;
	};
	const data = (await client.httpGet(`/services/${serviceID.value}/form`)) as IDataObject;
	return [{ json: data }];
}
