import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Get SMS Service operation for SMS resource
 *
 * Retrieves detailed information for a specific SMS service:
 * - HTTP GET request to `/sms/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns SMS service details with quota, credit, etc.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get SMS Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the SMS service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get SMS Service operation.
 *
 * Retrieves detailed information for a specific SMS service.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing SMS service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/sms/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
