import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Terminate Service operation for Service resource
 *
 * Terminates a suspended service:
 * - HTTP POST request to `/service/{serviceId}/terminate` endpoint
 * - Service ID parameter is required
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Terminate Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service ID',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the service to terminate',
			displayOptions,
		},
	];
}

/**
 * Executes the Terminate Service operation.
 *
 * Terminates a suspended service.
 *
 * HTTP method: POST
 * Endpoint: /service/{serviceId}/terminate
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceId = this.getNodeParameter('serviceId', 0) as string;
	const data = (await client.httpPost(`/service/${serviceId}/terminate`, {
		body: {},
	})) as IDataObject;
	return [{ json: data }];
}
