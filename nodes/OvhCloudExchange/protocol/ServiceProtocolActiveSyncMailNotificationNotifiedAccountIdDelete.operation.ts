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
			displayName: 'Notified Account ID',
			name: 'notifiedAccountId',
			type: 'string',
			default: '',
			required: true,
		},
	];
}

/**
 * Unubscribe address from ActiveSync quarantine notifications
 *
 * HTTP method: DELETE
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/protocol/activeSyncMailNotification/{notifiedAccountId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const notifiedAccountId = this.getNodeParameter('notifiedAccountId', _itemIndex ?? 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/protocol/activeSyncMailNotification/" + encodeURIComponent(notifiedAccountId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
