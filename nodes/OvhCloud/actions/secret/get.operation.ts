import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get Secret Service operation for Secret resource
 *
 * Retrieves detailed information for a specific secret service:
 * - HTTP GET request to `/secret/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns secret service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Secret Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the secret service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Secret Service operation.
 *
 * Retrieves detailed information for a specific secret service.
 *
 * HTTP method: GET
 * Endpoint: /secret/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing secret service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/secret/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
