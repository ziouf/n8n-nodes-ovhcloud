import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete an HTTP route.
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/http/route/{routeId}
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
		{
			displayName: 'Route ID',
			name: 'routeId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the HTTP route',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete HTTP Route operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const routeId = this.getNodeParameter('routeId', 0) as number;
	await client.httpDelete(`/ipLoadbalancing/${serviceName}/http/route/${routeId}`);
	return [{ json: { success: true } }];
}
