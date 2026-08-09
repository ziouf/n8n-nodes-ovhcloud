import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'The userLogs login used to connect to logs.ovh.net',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The new userLogs password',
			displayOptions,
		},
	];
}

/**
 * Request a userLogs password change
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/userLogs/{login}/changePassword
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const login = this.getNodeParameter('login', _itemIndex as number) as string;
	const password = this.getNodeParameter('password', _itemIndex as number) as string;
	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/userLogs/${encodeURIComponent(login)}/changePassword`,
		{ password } as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
