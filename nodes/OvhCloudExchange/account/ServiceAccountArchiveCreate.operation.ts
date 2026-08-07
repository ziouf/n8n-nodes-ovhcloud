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
			displayName: 'Quota',
			name: 'quota',
			type: 'string',
			default: '',
			description: 'Archive mailbox quota (if not provided mailbox quota will be taken)',
		},
	];
}

/**
 * Create new archive mailbox
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/archive
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0) as string;
	const quota = this.getNodeParameter('quota', 0) as any;

	const body: IDataObject = {
    quota: quota
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/account/" + encodeURIComponent(primaryEmailAddress) + "/archive", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
