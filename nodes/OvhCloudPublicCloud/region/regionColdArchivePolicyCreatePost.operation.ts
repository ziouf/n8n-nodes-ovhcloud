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
			displayName: 'User ID',
			name: 'userId',
			type: 'string',
			default: '',
			required: true,
			description: 'The userId parameter',
			displayOptions,
		},
		{
			displayName: 'Object Key',
			name: 'objectKey',
			type: 'string',
			default: '',
			description: 'The objectKey parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Role Name',
			name: 'roleName',
			type: 'string',
			default: '',
			description: 'The roleName parameter (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the POST Add a policy to a cold archive container for a given user operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/coldArchive/${name}/policy/${userId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;
	const objectKey = this.getNodeParameter('objectKey', _itemIndex ?? 0, '') as string;
	const roleName = this.getNodeParameter('roleName', _itemIndex ?? 0, '') as string;
	const body: IDataObject = {
		objectKey: objectKey,
		roleName: roleName
	};

	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPost(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/coldArchive/'+ name+ '/policy/'+ userId+ '',
			body as IDataObject
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
