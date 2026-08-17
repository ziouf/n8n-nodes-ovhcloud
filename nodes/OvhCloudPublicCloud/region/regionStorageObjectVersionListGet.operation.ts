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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const key = this.getNodeParameter('key', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const limit = this.getNodeParameter('limit', _itemIndex ?? 0, '') as string;
	const versionIdMarker = this.getNodeParameter('versionIdMarker', _itemIndex ?? 0, '') as string;

	const qs: IDataObject = {
		limit: limit,
		versionIdMarker: versionIdMarker
	};
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpGet(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/storage/'+ name+ '/object/'+ key+ '/version',
			qs
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
