import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Change password for a delegated account.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/delegatedAccount/{email}/changePassword
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			description: 'The full email address of the delegated account',
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
 * Executes the Change Delegated Account Password operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const email = this.getNodeParameter('email', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;
	const data = (await client.httpPost(
		`/email/domain/delegatedAccount/${email}/changePassword`,
		{ password },
	)) as IDataObject;
	return [{ json: data }];
}
