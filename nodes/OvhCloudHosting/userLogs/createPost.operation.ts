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
			displayName: 'Own Logs ID',
			name: 'ownLogsId',
			type: 'number',
			default: 0,
			description: 'OwnLogs where this userLogs will be enabled. Default: main domain ownlogs.',
			displayOptions,
		},
	];
}

/**
 * Create a new userLogs
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/userLogs
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const login = this.getNodeParameter('login', itemIndex as number) as string;
	const password = this.getNodeParameter('password', itemIndex as number) as string;
	const description = this.getNodeParameter('description', itemIndex as number) as string;
	const ownLogsId = this.getNodeParameter('ownLogsId', itemIndex as number, 0) as number;

	const body: IDataObject = { description, login, password };
	if (ownLogsId) {
		body.ownLogsId = ownLogsId;
	}

	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/userLogs`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
