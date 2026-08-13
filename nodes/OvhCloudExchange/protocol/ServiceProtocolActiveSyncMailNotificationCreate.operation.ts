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
			displayName: 'Notified Account ID',
			name: 'notifiedAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Exchange Account ID',
		},
	];
}

/**
 * Subscribe new address to ActiveSync quarantine notifications
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const notifiedAccountId = this.getNodeParameter('notifiedAccountId', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    notifiedAccountId: notifiedAccountId
	};

	const client = getClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/protocol/activeSyncMailNotification", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
