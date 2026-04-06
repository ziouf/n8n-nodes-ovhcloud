import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Delete a rule from a TCP route.
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
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
			description: 'The ID of the TCP route',
			displayOptions,
		},
		{
			displayName: 'Rule ID',
			name: 'ruleId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the rule',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete TCP Route Rule operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const routeId = this.getNodeParameter('routeId', 0) as number;
	const ruleId = this.getNodeParameter('ruleId', 0) as number;
	await client.httpDelete(`/ipLoadbalancing/${serviceName}/tcp/route/${routeId}/rule/${ruleId}`);
	return [{ json: { success: true } }];
}
