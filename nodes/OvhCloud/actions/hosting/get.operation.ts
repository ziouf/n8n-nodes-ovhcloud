import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Private Database Hosting Service operation for Hosting resource
 *
 * Retrieves detailed information for a specific private database hosting service:
 * - HTTP GET request to `/hosting/privateDatabase/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns private database details with quota, version, etc.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Private Database Hosting Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the private database hosting service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Private Database Hosting Service operation.
 *
 * Retrieves detailed information for a specific private database hosting service.
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing private database details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/hosting/privateDatabase/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
