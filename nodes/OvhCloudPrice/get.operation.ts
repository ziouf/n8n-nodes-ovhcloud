import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get Price operation for Price resource
 *
 * Retrieves detailed pricing information for a specific service:
 * - HTTP GET request to `/price/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns pricing details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Price operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the service to get pricing for',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Price operation.
 *
 * Retrieves detailed pricing information for a specific service.
 *
 * HTTP method: GET
 * Endpoint: /price/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing pricing details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/price/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
