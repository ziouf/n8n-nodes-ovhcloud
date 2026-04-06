import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief Update SSL Service Infos operation for SSL resource
 *
 * Updates service information for a specific SSL service:
 * - HTTP PUT request to `/ssl/{serviceName}/serviceInfos` endpoint
 * - Service name parameter is required
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Update Service Infos operation
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
 * Executes the Update SSL Service Infos operation.
 *
 * Updates service information for a specific SSL service.
 *
 * HTTP method: PUT
 * Endpoint: /ssl/{serviceName}/serviceInfos
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPut(`/ssl/${serviceName}/serviceInfos`, {
		body: {},
	})) as IDataObject;
	return [{ json: data }];
}
