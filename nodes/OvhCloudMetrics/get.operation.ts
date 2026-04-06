import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get Metrics Service operation for Metrics resource
 *
 * Retrieves detailed information for a specific metrics service:
 * - HTTP GET request to `/metrics/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns metrics service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Metrics Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the metrics service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Metrics Service operation.
 *
 * Retrieves detailed information for a specific metrics service.
 *
 * HTTP method: GET
 * Endpoint: /metrics/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing metrics service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/metrics/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
