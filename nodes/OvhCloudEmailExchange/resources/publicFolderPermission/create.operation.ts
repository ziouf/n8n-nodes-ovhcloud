import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create a permission for a public folder.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/publicFolder/{path}/permission
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the organization',
			displayOptions,
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Exchange service',
			displayOptions,
		},
		{
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			required: true,
			description: 'The path of the public folder',
			displayOptions,
		},
		{
			displayName: 'Allowed Account ID',
			name: 'allowedAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'The account ID to grant permission to',
			displayOptions,
		},
		{
			displayName: 'Access Rights',
			name: 'accessRights',
			type: 'multiOptions',
			options: [
				{ name: 'CreateItems', value: 'CreateItems' },
				{ name: 'CreateSubfolders', value: 'CreateSubfolders' },
				{ name: 'DeleteAllItems', value: 'DeleteAllItems' },
				{ name: 'DeleteOwnedItems', value: 'DeleteOwnedItems' },
				{ name: 'EditAllItems', value: 'EditAllItems' },
				{ name: 'EditOwnedItems', value: 'EditOwnedItems' },
				{ name: 'FolderContact', value: 'FolderContact' },
				{ name: 'FolderOwner', value: 'FolderOwner' },
				{ name: 'FolderVisible', value: 'FolderVisible' },
				{ name: 'ReadItems', value: 'ReadItems' },
			],
			default: [],
			required: true,
			description: 'The access rights to grant',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Public Folder Permission operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const path = this.getNodeParameter('path', 0) as string;
	const allowedAccountId = this.getNodeParameter('allowedAccountId', 0) as string;
	const accessRights = this.getNodeParameter('accessRights', 0) as string[];

	const body: IDataObject = { allowedAccountId, accessRights };
	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
