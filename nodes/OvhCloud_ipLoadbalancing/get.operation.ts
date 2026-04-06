import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get IP Load Balancer operation for IP Load Balancing resource
 *
 * Retrieves detailed information for a specific IP Load Balancer:
 * - HTTP GET request to `/ipLoadbalancing/{serviceName}` endpoint
 * - Service name parameter is required
 * - Returns IP Load Balancer details
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get IP Load Balancer operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name of the IP Load Balancer',
			displayOptions,
		},
	];
}

/**
 * Executes the Get IP Load Balancer operation.
 *
 * Retrieves detailed information for a specific IP Load Balancer.
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing IP Load Balancer details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/ipLoadbalancing/${serviceName}`)) as IDataObject;
	return [{ json: data }];
}
