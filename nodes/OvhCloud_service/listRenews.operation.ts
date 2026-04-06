import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief List Renews operation for Service resource
 *
 * Lists possible renews for a service:
 * - HTTP GET request to `/service/{serviceId}/renew` endpoint
 * - Service ID parameter is required
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the List Renews operation
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
 * Executes the List Renews operation.
 *
 * Lists possible renews for a service.
 *
 * HTTP method: GET
 * Endpoint: /service/{serviceId}/renew
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing renew options
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceId = this.getNodeParameter('serviceId', 0) as string;
	const data = (await client.httpGet(`/service/${serviceId}/renew`)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
