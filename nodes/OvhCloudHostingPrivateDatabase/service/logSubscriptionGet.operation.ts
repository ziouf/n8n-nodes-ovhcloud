import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
 * Get subscription details
 *
 * HTTP method: GET
 * Endpoint: /hosting/privateDatabase/{serviceName}/log/subscription/{subscriptionId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpGet('/hosting' + '/' + 'privateDatabase' + '/' + encodeURIComponent(serviceName) + '/' + 'log' + '/' + 'subscription' + '/' + encodeURIComponent(subscriptionId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
