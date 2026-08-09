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
			displayName: 'Allow Account ID',
			name: 'allowAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Account ID to allow to send as mails from this mailing list',
		},
	];
}

/**
 * Allow another user to Send aso mails from this mailing list
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/sendOnBehalfTo
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const mailingListAddress = this.getNodeParameter('mailingListAddress', _itemIndex ?? 0) as string;
	const allowAccountId = this.getNodeParameter('allowAccountId', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    allowAccountId: allowAccountId
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/mailingList/" + encodeURIComponent(mailingListAddress) + "/sendOnBehalfTo", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
