import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Change password for an email account.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/account/{accountName}/changePassword
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the email account',
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
	];
}

/**
 * Executes the Change Account Password operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/account/${accountName}/changePassword`,
		{ password },
	)) as IDataObject;
	return [{ json: data }];
}
