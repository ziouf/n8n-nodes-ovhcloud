import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'SubscriptionId',
			name: 'subscriptionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The subscriptionid identifier',
			displayOptions,
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /ipLoadbalancing/{serviceName}/log/subscription/{subscriptionId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpGet('/ipLoadbalancing' + '/' + encodeURIComponent(serviceName) + '/' + 'log' + '/' + 'subscription' + '/' + encodeURIComponent(subscriptionId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

