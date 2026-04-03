import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get SSL Gateway Service operation for SSL Gateway resource
 *
 * Retrieves detailed information for a specific SSL Gateway service:
 * - HTTP GET request to `/sslGateway/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns SSL Gateway service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get SSL Gateway Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the SSL Gateway service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get SSL Gateway Service operation.
 *
 * Retrieves detailed information for a specific SSL Gateway service.
 *
 * HTTP method: GET
 * Endpoint: /sslGateway/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing SSL Gateway service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/sslGateway/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
