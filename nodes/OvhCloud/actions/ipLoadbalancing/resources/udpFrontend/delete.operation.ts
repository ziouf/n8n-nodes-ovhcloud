import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Delete a UDP frontend.
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
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
			displayName: 'Frontend ID',
			name: 'frontendId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the UDP frontend',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete UDP Frontend operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const frontendId = this.getNodeParameter('frontendId', 0) as number;
	await client.httpDelete(`/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`);
	return [{ json: { success: true } }];
}
