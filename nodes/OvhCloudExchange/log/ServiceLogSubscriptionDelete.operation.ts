import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange service',
		},
		{
			displayName: 'Subscription Id',
			name: 'subscriptionId',
			type: 'string',
			default: '',
			required: true,
			description: 'Subscription ID',
		},
	];
}

/**
 * Delete a subscription
 *
 * HTTP method: DELETE
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/log/subscription/{subscriptionId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/log/subscription/" + encodeURIComponent(subscriptionId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
