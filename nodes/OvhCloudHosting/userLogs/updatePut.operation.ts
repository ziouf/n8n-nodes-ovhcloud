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
			description: 'The userLogs login used to connect to logs.ovh.net',
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
	];
}

/**
 * Alter a userLogs object properties
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/{serviceName}/userLogs/{login}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const login = this.getNodeParameter('login', _itemIndex as number) as string;
	const description = this.getNodeParameter('description', _itemIndex as number) as string;
	await client.httpPut(
		`/hosting/web/${encodeURIComponent(serviceName)}/userLogs/${encodeURIComponent(login)}`,
		{ description } as IDataObject,
	);
	return this.helpers.returnJsonArray([{ success: true } as IDataObject]);
}
