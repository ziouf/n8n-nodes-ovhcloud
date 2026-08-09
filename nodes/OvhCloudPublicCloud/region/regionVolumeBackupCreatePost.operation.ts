import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Volume ID',
			name: 'volumeId',
			type: 'string',
			default: '',
			description: 'The volumeId parameter',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'The name parameter',
			displayOptions,
		},
		{
			displayName: 'Extra Labels',
			name: 'extraLabels',
			type: 'string',
			default: '',
			description: 'The extraLabels parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Volume Backup operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/volumeBackup
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('volumeId', _itemIndex ?? 0)) {
		body.volumeId = this.getNodeParameter('volumeId', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('name', _itemIndex ?? 0)) {
		body.name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('extraLabels', _itemIndex ?? 0)) {
		body.extraLabels = this.getNodeParameter('extraLabels', _itemIndex ?? 0) as string;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/volumeBackup`, body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
