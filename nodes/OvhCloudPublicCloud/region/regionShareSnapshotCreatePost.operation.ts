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
			displayName: 'Share ID',
			name: 'shareId',
			type: 'string',
			default: '',
			required: true,
			description: 'The share UUID (e.g. a1b2c3d4-e5f6-7890-abcd-ef1234567890)',
			displayOptions,
		},
		{
			displayName: 'Snapshot Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'A human-readable name for the snapshot',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			typeOptions: { rows: 3 },
			default: '',
			description: 'A human-readable description for the snapshot (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Share Snapshot operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/share/{shareId}/snapshot
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', 0) as string;
	const shareId = this.getNodeParameter('shareId', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;

	const body = {
		name,
	} as import('n8n-workflow').IDataObject;

	const description = (this.getNodeParameter('description', 0) || '') as string;
	if (description !== '') {
		body.description = description;
	}

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/share/${shareId}/snapshot`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
