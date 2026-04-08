import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete a log subscription for an Email Exchange service.
 *
 * HTTP method: DELETE
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/log/subscription/{subscriptionId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the organization',
			displayOptions,
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Exchange service',
			displayOptions,
		},
		{
			displayName: 'Subscription ID',
			name: 'subscriptionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the subscription',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Log Subscription operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', 0) as string;

	const data = (await client.httpDelete(
		`/email/exchange/${organizationName}/service/${exchangeService}/log/subscription/${subscriptionId}`,
	)) as IDataObject;
	return [{ json: data }];
}
