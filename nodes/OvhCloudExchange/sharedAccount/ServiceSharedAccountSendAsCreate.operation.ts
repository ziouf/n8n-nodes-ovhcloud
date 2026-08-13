import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Allow Account ID',
			name: 'allowAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Account ID to allow to send mails from this shared mailbox',
		},
	];
}

/**
 * Allow another user to send mails from this shared mailbox
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendAs
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const sharedEmailAddress = this.getNodeParameter('sharedEmailAddress', _itemIndex ?? 0) as string;
	const allowAccountId = this.getNodeParameter('allowAccountId', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    allowAccountId: allowAccountId
	};

	const client = getClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/sharedAccount/" + encodeURIComponent(sharedEmailAddress) + "/sendAs", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
