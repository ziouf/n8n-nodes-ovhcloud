import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your CDN offer',
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
 * Executes the Get GetLogSubscription operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/log/subscription/{subscriptionId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/cdn/dedicated/${encodeURIComponent(serviceName)}/log/subscription/${encodeURIComponent(subscriptionId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
