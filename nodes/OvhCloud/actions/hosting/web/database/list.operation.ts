import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Install new database operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/database` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [		{
			displayName: 'Capabilitie',
			name: 'capabilitie',
			type: 'string',
			default: '',
			required: true,
			description: 'Type of your database',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Database password',
			displayOptions,
		},
		{
			displayName: 'Quota',
			name: 'quota',
			type: 'string',
			default: '',
			description: 'Quota assign to your database. Only for extraSql.',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'Type you want for your database',
			displayOptions,
		},
		{
			displayName: 'User',
			name: 'user',
			type: 'string',
			default: '',
			required: true,
			description: 'Database user name. Must begin with your hosting login and must be in lower case.',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			description: 'Version you want for your database following the type',
			displayOptions,
		},
	];
}

/**
 * Executes the Install new database operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/database
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const capabilitie = this.getNodeParameter('capabilitie', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;
	const quota = this.getNodeParameter('quota', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;
	const user = this.getNodeParameter('user', 0) as string;
	const version = this.getNodeParameter('version', 0) as string;
	const data = (await client.httpPost(`/hosting/web/${serviceName}/database`, { body: { capabilitie: capabilitie, password: password, quota: quota, type: type, user: user, version: version } })) as IDataObject;
	return [{ json: data }];
}
