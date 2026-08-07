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
			displayName: 'Manager Account Id',
			name: 'managerAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Manager account id',
		},
	];
}

/**
 * Delete mailing list manager
 *
 * HTTP method: DELETE
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/mailingList/{mailingListAddress}/manager/account/{managerAccountId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const mailingListAddress = this.getNodeParameter('mailingListAddress', 0) as string;
	const managerAccountId = this.getNodeParameter('managerAccountId', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/mailingList/" + encodeURIComponent(mailingListAddress) + "/manager/account/" + encodeURIComponent(managerAccountId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
