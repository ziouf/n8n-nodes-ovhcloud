import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Request a password change operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the object',
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
 * Executes the Request a password change operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	const login = this.getNodeParameter('login', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/ownLogs/${id}/userLogs/${login}/changePassword`, { body: { password: password } })) as IDataObject;
	return [{ json: data }];
}
