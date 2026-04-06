import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Create Renew Order operation for Service resource
 *
 * Creates a renew order for a service:
 * - HTTP POST request to `/service/{serviceId}/renew` endpoint
 * - Service ID parameter is required
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Create Renew operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service ID',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the service to renew',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Renew Order operation.
 *
 * Creates a renew order for a service.
 *
 * HTTP method: POST
 * Endpoint: /service/{serviceId}/renew
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the renew order
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceId = this.getNodeParameter('serviceId', 0) as string;
	const data = (await client.httpPost(`/service/${serviceId}/renew`, { body: {} })) as IDataObject;
	return [{ json: data }];
}
