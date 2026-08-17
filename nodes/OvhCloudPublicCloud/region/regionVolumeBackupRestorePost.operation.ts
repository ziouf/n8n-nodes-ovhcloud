import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Region Name',
			name: 'regionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The region name (e.g. GRA63, BHS62)',
			displayOptions,
		},
		{
			displayName: 'Volume Backup ID',
			name: 'volumeBackupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The volumeBackupId parameter',
			displayOptions,
		},
		{
			displayName: 'Volume ID',
			name: 'volumeId',
			type: 'string',
			default: '',
			description: 'The volumeId parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Restore Volume Backup operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/volumeBackup/${volumeBackupId}/restore
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const volumeBackupId = this.getNodeParameter('volumeBackupId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('volumeId', _itemIndex ?? 0)) {
		body.volumeId = this.getNodeParameter('volumeId', _itemIndex ?? 0) as string;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/volumeBackup/${volumeBackupId}/restore`, body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
