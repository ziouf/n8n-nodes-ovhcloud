import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get DBaaS Log Service operation for DBaaS resource
 *
 * Retrieves detailed information for a specific DBaaS log service:
 * - HTTP GET request to `/dbaas/logs/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns DBaaS log service details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get DBaaS Log Service operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DBaaS log service',
			displayOptions,
		},
	];
}

/**
 * Executes the Get DBaaS Log Service operation.
 *
 * Retrieves detailed information for a specific DBaaS log service.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing DBaaS log service details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/dbaas/logs/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
