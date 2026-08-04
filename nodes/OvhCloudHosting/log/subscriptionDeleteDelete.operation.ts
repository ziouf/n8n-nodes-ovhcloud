import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Subscription ID',
			name: 'subscriptionId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Delete a log subscription
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/web/{serviceName}/log/subscription/{subscriptionId}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', itemIndex as number) as string;
	const data = (await client.httpDelete(
		`/hosting/web/${encodeURIComponent(serviceName)}/log/subscription/${encodeURIComponent(subscriptionId)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
