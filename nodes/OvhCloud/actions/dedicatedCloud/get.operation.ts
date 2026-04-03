import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Dedicated Cloud operation for Dedicated Cloud resource
 *
 * Retrieves detailed information for a specific dedicated cloud:
 * - HTTP GET request to `/dedicatedCloud/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns dedicated cloud details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Dedicated Cloud operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the dedicated cloud',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Dedicated Cloud operation.
 *
 * Retrieves detailed information for a specific dedicated cloud.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing dedicated cloud details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
