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
			displayName: 'Primary Email Address',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'Default email for this mailbox',
		},
		{
			displayName: 'Allowed Account Id',
			name: 'allowedAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Account id to give send on behalf to',
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/sendOnBehalfTo/{allowedAccountId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0) as string;
	const allowedAccountId = this.getNodeParameter('allowedAccountId', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/account/" + encodeURIComponent(primaryEmailAddress) + "/sendOnBehalfTo/" + encodeURIComponent(allowedAccountId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
