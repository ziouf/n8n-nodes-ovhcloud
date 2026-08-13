import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OverTheBox Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your OverTheBox offer (e.g. overthebox-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getOverTheBoxServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'overthebox-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Backup ID',
			name: 'backupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the backup to restore',
			displayOptions,
		},
	];
}

/**
 * Create a group of actions to restore a given backup.
 *
 * HTTP method: POST
 * Endpoint: /overTheBox/{serviceName}/device/restoreBackup
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const backupId = (this.getNodeParameter('backupId', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (backupId) body.backupId = backupId;
	const data = (await client.httpPost(
		`/overTheBox/${encodeURIComponent(serviceName)}/device/restoreBackup`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
