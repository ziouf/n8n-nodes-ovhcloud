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
			displayName: 'Login Filter',
			name: 'login',
			type: 'string',
			default: '',
			description: 'Filter the value of login property (like)',
			displayOptions,
		},
	];
}

/**
 * List users allowed to connect into your logs interface for an own logs
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/ownLogs/{id}/userLogs
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const ownLogsId = this.getNodeParameter('ownLogsId', _itemIndex ?? 0) as number;
	const login = this.getNodeParameter('login', _itemIndex ?? 0, '') as string;

	const qs: IDataObject = {};
	if (login) {
		qs.login = login;
	}

	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/ownLogs/${encodeURIComponent(String(ownLogsId))}/userLogs`,
		qs,
	)) as unknown;
	return this.helpers.returnJsonArray(
		Array.isArray(data) ? (data as IDataObject[]) : [data as IDataObject],
	);
}
