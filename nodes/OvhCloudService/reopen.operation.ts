import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Reopen Service operation for Service resource
 *
 * Reopens a suspended service:
 * - HTTP POST request to `/service/{serviceId}/reopen` endpoint
 * - Service ID parameter is required
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Reopen Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service ID',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the service to reopen',
			displayOptions,
		},
	];
}

/**
 * Executes the Reopen Service operation.
 *
 * Reopens a suspended service.
 *
 * HTTP method: POST
 * Endpoint: /service/{serviceId}/reopen
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceId = this.getNodeParameter('serviceId', 0) as string;
	const data = (await client.httpPost(`/service/${serviceId}/reopen`, { body: {} })) as IDataObject;
	return [{ json: data }];
}
