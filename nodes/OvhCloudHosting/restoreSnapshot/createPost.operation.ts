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
			displayName: 'Backup',
			name: 'backup',
			type: 'options',
			options: [
				{ name: 'Daily 1', value: 'daily.1' },
				{ name: 'Daily 2', value: 'daily.2' },
				{ name: 'Daily 3', value: 'daily.3' },
				{ name: 'Weekly 1', value: 'weekly.1' },
				{ name: 'Weekly 2', value: 'weekly.2' },
			],
			default: 'daily.1',
			required: true,
			description: 'The backup you want to restore',
			displayOptions,
		},
	];
}

/**
 * Restore a snapshot of the hosting
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/restoreSnapshot
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const backup = this.getNodeParameter('backup', _itemIndex ?? 0) as string;
	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/restoreSnapshot`,
		{ backup } as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
