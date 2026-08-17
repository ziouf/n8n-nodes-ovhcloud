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
			displayName: 'Role Name',
			name: 'roleName',
			type: 'string',
			default: '',
			required: true,
			description: 'The role name to assign',
			displayOptions,
		},
		{
			displayName: 'User ID',
			name: 'userId',
			type: 'string',
			default: '',
			required: true,
			description: 'The user ID to assign the role to',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Role assignment operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{projectId}/role
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const body: IDataObject = {};
	body['roleName'] = this.getNodeParameter('roleName', _itemIndex ?? 0) as string;
	body['userId'] = this.getNodeParameter('userId', _itemIndex ?? 0) as string;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/role`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
