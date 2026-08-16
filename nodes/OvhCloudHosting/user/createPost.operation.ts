import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			description: 'Login use for your new user',
			displayOptions,
		},
		{
			displayName: 'Home',
			name: 'home',
			type: 'string',
			default: '/',
			required: true,
			description: 'Home directory',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'SSH State',
			name: 'sshState',
			type: 'options',
			options: [
				{ name: 'Active', value: 'active' },
				{ name: 'None', value: 'none' },
				{ name: 'SFTP Only', value: 'sftponly' },
			],
			default: 'none',
			description: 'SSH state for this user. Default: none.',
			displayOptions,
		},
	];
}

/**
 * Create a user on the hosting
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/user
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const login = this.getNodeParameter('login', _itemIndex ?? 0) as string;
	const home = this.getNodeParameter('home', _itemIndex ?? 0) as string;
	const password = this.getNodeParameter('password', _itemIndex ?? 0) as string;
	const sshState = this.getNodeParameter('sshState', _itemIndex ?? 0, '') as string;

	const body: IDataObject = { home, login, password };
	if (sshState) {
		body.sshState = sshState;
	}

	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/user`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
