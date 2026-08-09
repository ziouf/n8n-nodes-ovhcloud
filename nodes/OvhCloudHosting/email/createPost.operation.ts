import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(
	displayOptions: IDisplayOptions,
): import('n8n-workflow').INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Email Address',
			name: 'emailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'The email address to create',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The password for the email account',
			displayOptions,
		},
	];
}

/**
 * Create an email account
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/email
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const emailAddress = this.getNodeParameter('emailAddress', _itemIndex ?? 0) as string;
	const password = this.getNodeParameter('password', _itemIndex ?? 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/email`, {
		email: emailAddress,
		password,
	})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
