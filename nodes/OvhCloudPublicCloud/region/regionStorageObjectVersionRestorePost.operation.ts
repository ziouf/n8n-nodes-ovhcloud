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
			displayName: 'Days',
			name: 'days',
			type: 'string',
			default: '',
			description: 'The days parameter (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the POST Restore a specific version of a S3* object operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/storage/${name}/object/${key}/version/${versionId}/restore
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const key = this.getNodeParameter('key', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const versionId = this.getNodeParameter('versionId', _itemIndex ?? 0) as string;
	const days = this.getNodeParameter('days', _itemIndex ?? 0, '') as string;
	const body: IDataObject = {
		days: days
	};

	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPost(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/storage/'+ name+ '/object/'+ key+ '/version/'+ versionId+ '/restore',
			body as IDataObject
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
