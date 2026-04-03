import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Nutanix Service operation for Nutanix resource
 *
 * Retrieves detailed information for a specific Nutanix service:
 * - HTTP GET request to `/nutanix/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns Nutanix service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Nutanix Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Nutanix service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Nutanix Service operation.
 *
 * Retrieves detailed information for a specific Nutanix service.
 *
 * HTTP method: GET
 * Endpoint: /nutanix/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing Nutanix service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/nutanix/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
