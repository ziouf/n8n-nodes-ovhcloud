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
			displayName: 'Allow Account Id',
			name: 'allowAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Account id to allow to send On Behalf To mails from this shared mailbox',
		},
	];
}

/**
 * Allow another user to Send On Behalf To mails from this shared mailbox
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount/{sharedEmailAddress}/sendOnBehalfTo
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const sharedEmailAddress = this.getNodeParameter('sharedEmailAddress', 0) as string;
	const allowAccountId = this.getNodeParameter('allowAccountId', 0) as any;

	const body: IDataObject = {
    allowAccountId: allowAccountId
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/sharedAccount/" + encodeURIComponent(sharedEmailAddress) + "/sendOnBehalfTo", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
