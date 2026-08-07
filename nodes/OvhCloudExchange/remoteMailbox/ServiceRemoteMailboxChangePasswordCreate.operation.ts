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
			displayName: 'Force Password Change At Next Logon',
			name: 'forcePasswordChangeAtNextLogon',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'The password will need to be changed at the next time you log on',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'New password',
		},
	];
}

/**
 * Change mailbox password
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/remoteMailbox/{primaryEmailAddress}/changePassword
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0) as string;
	const forcePasswordChangeAtNextLogon = this.getNodeParameter('forcePasswordChangeAtNextLogon', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;

	const body: IDataObject = {
    forcePasswordChangeAtNextLogon: forcePasswordChangeAtNextLogon,
    password: password
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/remoteMailbox/" + encodeURIComponent(primaryEmailAddress) + "/changePassword", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
