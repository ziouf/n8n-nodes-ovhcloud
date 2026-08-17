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
 * Executes the POST Generate a presigned URL to download or upload objects in a cold archive container operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/coldArchive/${name}/presign
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

	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPost(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/coldArchive/'+ name+ '/presign',
			body as IDataObject
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
