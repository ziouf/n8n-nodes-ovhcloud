import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * @brief List SSL Tasks operation for SSL resource
 *
 * Lists tasks of an SSL service:
 * - HTTP GET request to `/ssl/{serviceName}/tasks` endpoint
 * - Service name parameter is required
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the List Tasks operation
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
 * Executes the List SSL Tasks operation.
 *
 * Lists tasks of an SSL service.
 *
 * HTTP method: GET
 * Endpoint: /ssl/{serviceName}/tasks
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing task IDs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/ssl/${serviceName}/tasks`)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
