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
	];
}

/**
 * Delete a userLogs from an own logs
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/web/{serviceName}/ownLogs/{id}/userLogs/{login}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const ownLogsId = this.getNodeParameter('ownLogsId', itemIndex as number) as number;
	const login = this.getNodeParameter('login', itemIndex as number) as string;
	const data = (await client.httpDelete(
		`/hosting/web/${encodeURIComponent(serviceName)}/ownLogs/${encodeURIComponent(String(ownLogsId))}/userLogs/${encodeURIComponent(login)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
