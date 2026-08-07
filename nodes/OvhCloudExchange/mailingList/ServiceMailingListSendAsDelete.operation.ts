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
			displayName: 'Mailing List Address',
			name: 'mailingListAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'The mailing list address',
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
 * Delete allowed user for SendAs
 *
 * HTTP method: DELETE
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendAs/{allowedAccountId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const mailingListAddress = this.getNodeParameter('mailingListAddress', 0) as string;
	const allowedAccountId = this.getNodeParameter('allowedAccountId', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/mailingList/" + encodeURIComponent(mailingListAddress) + "/sendAs/" + encodeURIComponent(allowedAccountId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
