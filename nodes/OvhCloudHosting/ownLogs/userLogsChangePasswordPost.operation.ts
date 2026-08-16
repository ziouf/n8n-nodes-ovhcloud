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
			displayName: 'Own Logs ID',
			name: 'ownLogsId',
			type: 'number',
			default: 0,
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
 * Request a userLogs password change on an own logs
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}/changePassword
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const ownLogsId = this.getNodeParameter('ownLogsId', _itemIndex ?? 0) as number;
	const login = this.getNodeParameter('login', _itemIndex ?? 0) as string;
	const password = this.getNodeParameter('password', _itemIndex ?? 0) as string;
	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/ownLogs/${encodeURIComponent(String(ownLogsId))}/userLogs/${encodeURIComponent(login)}/changePassword`,
		{ password } as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
