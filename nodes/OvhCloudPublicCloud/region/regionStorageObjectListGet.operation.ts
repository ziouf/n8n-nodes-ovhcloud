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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name parameter',
			displayOptions,
		},
		{
			displayName: 'Delimiter',
			name: 'delimiter',
			type: 'string',
			default: '',
			description: 'The delimiter parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Key Marker',
			name: 'keyMarker',
			type: 'string',
			default: '',
			description: 'The keyMarker parameter (optional)',
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
			displayName: 'Prefix',
			name: 'prefix',
			type: 'string',
			default: '',
			description: 'The prefix parameter (optional)',
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
		{
			displayName: 'With Versions',
			name: 'withVersions',
			type: 'string',
			default: '',
			description: 'The withVersions parameter (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the GET Get objects of S3* compatible storage containers operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/storage/${name}/object
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const delimiter = this.getNodeParameter('delimiter', _itemIndex ?? 0, '') as string;
	const keyMarker = this.getNodeParameter('keyMarker', _itemIndex ?? 0, '') as string;
	const limit = this.getNodeParameter('limit', _itemIndex ?? 0, '') as string;
	const prefix = this.getNodeParameter('prefix', _itemIndex ?? 0, '') as string;
	const versionIdMarker = this.getNodeParameter('versionIdMarker', _itemIndex ?? 0, '') as string;
	const withVersions = this.getNodeParameter('withVersions', _itemIndex ?? 0, '') as string;

	const qs: IDataObject = {
		delimiter: delimiter,
		keyMarker: keyMarker,
		limit: limit,
		prefix: prefix,
		versionIdMarker: versionIdMarker,
		withVersions: withVersions
	};
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpGet(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/storage/'+ name+ '/object',
			qs
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
