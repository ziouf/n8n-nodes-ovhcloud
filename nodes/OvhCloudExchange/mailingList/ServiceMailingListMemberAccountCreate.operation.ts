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
		},
		{
			displayName: 'Member Account ID',
			name: 'memberAccountId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Member Contact ID',
			name: 'memberContactId',
			type: 'string',
			default: '',
		},
	];
}

/**
 * Add new mailing list member
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/member/account
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const mailingListAddress = this.getNodeParameter('mailingListAddress', _itemIndex ?? 0) as string;
	const memberAccountId = this.getNodeParameter('memberAccountId', _itemIndex ?? 0) as string;
	const memberContactId = this.getNodeParameter('memberContactId', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    memberAccountId: memberAccountId,
    memberContactId: memberContactId
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/mailingList/" + encodeURIComponent(mailingListAddress) + "/member/account", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
