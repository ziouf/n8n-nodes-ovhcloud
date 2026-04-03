import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get SSL Service operation for SSL resource
 *
 * Retrieves detailed information for a specific SSL service:
 * - HTTP GET request to `/ssl/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns SSL service details with status, domain, etc.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get SSL Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the SSL service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get SSL Service operation.
 *
 * Retrieves detailed information for a specific SSL service.
 *
 * HTTP method: GET
 * Endpoint: /ssl/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing SSL service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/ssl/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
