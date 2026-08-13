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
			displayName: 'Public Cloud Project',
			name: 'publicCloudProjectId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: '12345678-1234-1234-1234-1234567890ab',
				},
			],
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
			displayName: 'Volume Name',
			name: 'volumeName',
			type: 'string',
			default: '',
			description: 'The volumeName parameter',
			displayOptions,
		},
		{
			displayName: 'Volume Size',
			name: 'volumeSize',
			type: 'string',
			default: '',
			description: 'The volumeSize parameter',
			displayOptions,
		},
		{
			displayName: 'Volume Type',
			name: 'volumeType',
			type: 'string',
			default: '',
			description: 'The volumeType parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Volume from Backup operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/volumeBackup/${volumeBackupId}/volume
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const volumeBackupId = this.getNodeParameter('volumeBackupId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('volumeName', _itemIndex ?? 0)) {
		body.volumeName = this.getNodeParameter('volumeName', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('volumeSize', _itemIndex ?? 0)) {
		body.volumeSize = this.getNodeParameter('volumeSize', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('volumeType', _itemIndex ?? 0)) {
		body.volumeType = this.getNodeParameter('volumeType', _itemIndex ?? 0) as string;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/volumeBackup/${volumeBackupId}/volume`, body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
