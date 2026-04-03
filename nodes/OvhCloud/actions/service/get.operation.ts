import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Service operation for Service resource
 *
 * Retrieves detailed information for a specific service:
 * - HTTP GET request to `/service/{serviceId}` endpoint
 * - Service ID parameter is required
 * - Returns service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service ID',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Service operation.
 *
 * Retrieves detailed information for a specific service.
 *
 * HTTP method: GET
 * Endpoint: /service/{serviceId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceId = this.getNodeParameter('serviceId', 0) as string;
	const data = (await client.httpGet(`/service/${serviceId}`)) as IDataObject;
	return [{ json: data }];
}
