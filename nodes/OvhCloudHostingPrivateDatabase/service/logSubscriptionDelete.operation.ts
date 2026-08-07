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
          description: 'The internal name of your Web Cloud Database',
          displayOptions,
        },
        {
          displayName: 'SubscriptionId',
          name: 'subscriptionId',
          type: 'string',
          default: '',
          required: true,
          description: 'SubscriptionId parameter',
          displayOptions,
        },
	];
}

/**
 * Delete a subscription
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/privateDatabase/{serviceName}/log/subscription/{subscriptionId}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'log' + '/' + 'subscription' + '/' + encodeURIComponent(subscriptionId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
