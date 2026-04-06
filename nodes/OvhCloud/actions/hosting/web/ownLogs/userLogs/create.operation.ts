import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

/**
 * @brief Create new userLogs operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/ownLogs/{id}/userLogs` endpoint.
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
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			required: true,
			description: 'Description field for you',
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
			displayName: 'Own Logs ID',
			name: 'ownLogsId',
			type: 'number',
			default: '',
			description: 'OwnLogs where this userLogs will be enable. Default : main domain ownlogs.',
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
 * Executes the Create new userLogs operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/ownLogs/{id}/userLogs
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const description = this.getNodeParameter('description', 0) as string;
	const login = this.getNodeParameter('login', 0) as string;
	const ownLogsId = this.getNodeParameter('ownLogsId', 0) as number;
	const password = this.getNodeParameter('password', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/ownLogs/${id}/userLogs`, { body: { description: description, login: login, ownLogsId: ownLogsId, password: password } })) as IDataObject;
	return [{ json: data }];
}
