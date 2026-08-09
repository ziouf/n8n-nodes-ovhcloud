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
			displayName: 'Shared Email Address',
			name: 'sharedEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'Default email for this shared mailbox',
		},
		{
			displayName: 'Allowed Account ID',
			name: 'allowedAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Account ID to give send on behalf to',
		},
	];
}

/**
 * Delete allowed user for SendOnBehalfTo
 *
 * HTTP method: DELETE
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo/{allowedAccountId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const sharedEmailAddress = this.getNodeParameter('sharedEmailAddress', _itemIndex ?? 0) as string;
	const allowedAccountId = this.getNodeParameter('allowedAccountId', _itemIndex ?? 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/sharedAccount/" + encodeURIComponent(sharedEmailAddress) + "/sendOnBehalfTo/" + encodeURIComponent(allowedAccountId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
