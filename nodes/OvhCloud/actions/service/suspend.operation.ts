import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Suspend Service operation for Service resource
 *
 * Suspends a service. The service won't be accessible, but you will still be charged for it:
 * - HTTP POST request to `/service/{serviceId}/suspend` endpoint
 * - Service ID parameter is required
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Suspend Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service ID',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the service to suspend',
			displayOptions,
		},
	];
}

/**
 * Executes the Suspend Service operation.
 *
 * Suspends a service. The service won't be accessible, but you will still be charged for it.
 *
 * HTTP method: POST
 * Endpoint: /service/{serviceId}/suspend
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceId = this.getNodeParameter('serviceId', 0) as string;
	const data = (await client.httpPost(`/service/${serviceId}/suspend`, {
		body: {},
	})) as IDataObject;
	return [{ json: data }];
}
