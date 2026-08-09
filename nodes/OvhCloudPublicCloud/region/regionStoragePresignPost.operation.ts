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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name parameter',
			displayOptions,
		},
		{
			displayName: 'Expire',
			name: 'expire',
			type: 'string',
			default: '',
			description: 'The expire parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Method',
			name: 'method',
			type: 'string',
			default: '',
			description: 'The method parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Object',
			name: 'object',
			type: 'string',
			default: '',
			description: 'The object parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Storage Class',
			name: 'storageClass',
			type: 'string',
			default: '',
			description: 'The storageClass parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Version ID',
			name: 'versionId',
			type: 'string',
			default: '',
			description: 'The versionId parameter (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the POST Generate S3* compatible presigned URLs to download or upload objects operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/storage/${name}/presign
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const expire = this.getNodeParameter('expire', _itemIndex ?? 0, '') as string;
	const method = this.getNodeParameter('method', _itemIndex ?? 0, '') as string;
	const object = this.getNodeParameter('object', _itemIndex ?? 0, '') as string;
	const storageClass = this.getNodeParameter('storageClass', _itemIndex ?? 0, '') as string;
	const versionId = this.getNodeParameter('versionId', _itemIndex ?? 0, '') as string;
	const body: IDataObject = {
		expire: expire,
		method: method,
		object: object,
		storageClass: storageClass,
		versionId: versionId
	};

	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPost(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/storage/'+ name+ '/presign',
			body as IDataObject
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
