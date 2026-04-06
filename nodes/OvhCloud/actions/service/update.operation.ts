import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Update Service operation for Service resource
 *
 * Updates service properties:
 * - HTTP PUT request to `/service/{serviceId}` endpoint
 * - Service ID parameter is required
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Update Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service ID',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the service to update',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Service operation.
 *
 * Updates service properties.
 *
 * HTTP method: PUT
 * Endpoint: /service/{serviceId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceId = this.getNodeParameter('serviceId', 0) as string;
	const data = (await client.httpPut(`/service/${serviceId}`, { body: {} })) as IDataObject;
	return [{ json: data }];
}
