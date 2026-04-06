import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Update VIP Service Infos operation for VIP resource
 *
 * Updates service information for a specific VIP service:
 * - HTTP PUT request to `/vip/{serviceName}/serviceInfos` endpoint
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
			description: 'The name of the VIP service',
			displayOptions,
		},
	];
}

/**
 * Executes the Update VIP Service Infos operation.
 *
 * Updates service information for a specific VIP service.
 *
 * HTTP method: PUT
 * Endpoint: /vip/{serviceName}/serviceInfos
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpPut(`/vip/${serviceName}/serviceInfos`, {
		body: {},
	})) as IDataObject;
	return [{ json: data }];
}
