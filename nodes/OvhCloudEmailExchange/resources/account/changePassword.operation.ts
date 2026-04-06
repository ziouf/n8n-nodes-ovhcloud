import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Change password for an Email Exchange account.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}/changePassword
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the organization',
			displayOptions,
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Exchange service',
			displayOptions,
		},
		{
			displayName: 'Primary Email Address',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'The primary email address of the account',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			default: '',
			required: true,
			typeOptions: { password: true },
			description: 'New password for the account',
			displayOptions,
		},
		{
			displayName: 'Force Password Change at Next Logon',
			name: 'forcePasswordChangeAtNextLogon',
			type: 'boolean',
			default: false,
			description: 'Whether to force password change at next logon',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Account Password operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;
	const forcePasswordChangeAtNextLogon = this.getNodeParameter('forcePasswordChangeAtNextLogon', 0, false) as boolean;

	const body: IDataObject = { password };
	if (forcePasswordChangeAtNextLogon) body.forcePasswordChangeAtNextLogon = forcePasswordChangeAtNextLogon;

	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/changePassword`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
