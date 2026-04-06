import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Delete a log subscription for an IP Load Balancer.
 *
 * HTTP method: DELETE
 * Endpoint: /ipLoadbalancing/{serviceName}/log/subscription/{subscriptionId}
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
			displayName: 'Subscription ID',
			name: 'subscriptionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the log subscription',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Log Subscription operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', 0) as string;
	const data = (await client.httpDelete(
		`/ipLoadbalancing/${serviceName}/log/subscription/${subscriptionId}`,
	)) as IDataObject;
	return [{ json: data }];
}
