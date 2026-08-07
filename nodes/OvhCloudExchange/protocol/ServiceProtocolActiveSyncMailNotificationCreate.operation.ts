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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const notifiedAccountId = this.getNodeParameter('notifiedAccountId', 0) as string;

	const body: IDataObject = {
    notifiedAccountId: notifiedAccountId
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/protocol/activeSyncMailNotification", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
