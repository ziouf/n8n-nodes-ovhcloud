import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Startup Service operation for Startup resource
 *
 * Retrieves detailed information for a specific startup service:
 * - HTTP GET request to `/startup/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns startup service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Startup Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the startup service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Startup Service operation.
 *
 * Retrieves detailed information for a specific startup service.
 *
 * HTTP method: GET
 * Endpoint: /startup/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing startup service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/startup/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
