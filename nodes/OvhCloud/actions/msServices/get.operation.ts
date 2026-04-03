import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get MS Service operation for MS Services resource
 *
 * Retrieves detailed information for a specific MS service:
 * - HTTP GET request to `/msServices/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns MS service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get MS Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the MS service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get MS Service operation.
 *
 * Retrieves detailed information for a specific MS service.
 *
 * HTTP method: GET
 * Endpoint: /msServices/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing MS service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/msServices/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
