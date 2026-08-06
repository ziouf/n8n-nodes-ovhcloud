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
			displayName: 'Limit',
			name: 'limit',
			type: 'string',
			default: '',
			description: 'The limit parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Version ID Marker',
			name: 'versionIdMarker',
			type: 'string',
			default: '',
			description: 'The versionIdMarker parameter (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the GET Get versions of an object in a S3* compatible storage container operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/storage/${name}/object/${key}/version
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', 0) as string;
	const key = this.getNodeParameter('key', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const limit = this.getNodeParameter('limit', 0, '') as string;
	const versionIdMarker = this.getNodeParameter('versionIdMarker', 0, '') as string;

	const qs: IDataObject = {
		limit: limit,
		versionIdMarker: versionIdMarker
	};
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpGet(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/storage/'+ name+ '/object/'+ key+ '/version',
			qs
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
