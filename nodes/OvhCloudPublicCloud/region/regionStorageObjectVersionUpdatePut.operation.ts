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
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',
			required: true,
			description: 'The key parameter',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name parameter',
			displayOptions,
		},
		{
			displayName: 'Version ID',
			name: 'versionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The versionId parameter',
			displayOptions,
		},
		{
			displayName: 'Legal Hold',
			name: 'legalHold',
			type: 'string',
			default: '',
			description: 'The legalHold parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Retention',
			name: 'retention',
			type: 'string',
			default: '',
			description: 'The retention parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Restore',
			name: 'restore',
			type: 'string',
			default: '',
			description: 'The restore parameter (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the PUT Update S3* compatible storage container object version operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/storage/${name}/object/${key}/version/${versionId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const key = this.getNodeParameter('key', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const versionId = this.getNodeParameter('versionId', _itemIndex ?? 0) as string;
	const legalHold = this.getNodeParameter('legalHold', _itemIndex ?? 0, '') as string;
	const retention = this.getNodeParameter('retention', _itemIndex ?? 0, '') as string;
	const restore = this.getNodeParameter('restore', _itemIndex ?? 0, '') as string;
	const body: IDataObject = {
		legalHold: legalHold,
		retention: retention,
		restore: restore
	};

	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPut(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/storage/'+ name+ '/object/'+ key+ '/version/'+ versionId+ '',
			body as IDataObject
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
