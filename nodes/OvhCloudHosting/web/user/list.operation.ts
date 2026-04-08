import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Create new ftp/ssh user operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/user` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Home',
			name: 'home',
			type: 'string',
			default: '',
			required: true,
			description: 'Home directory',
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
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Ssh State',
			name: 'sshState',
			type: 'string',
			default: '',
			description: 'Ssh state for this user. Default: none.',
			displayOptions,
		},
	];
}

/**
 * Executes the Create new ftp/ssh user operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/user
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const home = this.getNodeParameter('home', 0) as string;
	const login = this.getNodeParameter('login', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;
	const sshState = this.getNodeParameter('sshState', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/user`, { body: { home: home, login: login, password: password, sshState: sshState } })) as IDataObject;
	return [{ json: data }];
}
