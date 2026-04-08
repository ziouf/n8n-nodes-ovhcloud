import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get OVH Cloud Connect Service operation for OVH Cloud Connect resource
 *
 * Retrieves detailed information for a specific OVH Cloud Connect service:
 * - HTTP GET request to `/ovhCloudConnect/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns OVH Cloud Connect service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get OVH Cloud Connect Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the OVH Cloud Connect service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get OVH Cloud Connect Service operation.
 *
 * Retrieves detailed information for a specific OVH Cloud Connect service.
 *
 * HTTP method: GET
 * Endpoint: /ovhCloudConnect/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing OVH Cloud Connect service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/ovhCloudConnect/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
