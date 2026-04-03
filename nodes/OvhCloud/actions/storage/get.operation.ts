import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Storage Service operation for Storage resource
 *
 * Retrieves detailed information for a specific storage service:
 * - HTTP GET request to `/storage/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns storage service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Storage Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the storage service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Storage Service operation.
 *
 * Retrieves detailed information for a specific storage service.
 *
 * HTTP method: GET
 * Endpoint: /storage/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing storage service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/storage/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
