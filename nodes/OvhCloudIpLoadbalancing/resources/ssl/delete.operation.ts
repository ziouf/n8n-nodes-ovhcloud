import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete a custom SSL certificate.
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/ssl/{id}
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
			displayName: 'SSL ID',
			name: 'sslId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the SSL certificate',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete SSL Certificate operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const sslId = this.getNodeParameter('sslId', 0) as number;
	await client.httpDelete(`/ipLoadbalancing/${serviceName}/ssl/${sslId}`);
	return [{ json: { success: true } }];
}
