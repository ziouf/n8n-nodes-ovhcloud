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
			displayName: 'User ID',
			name: 'userId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Role ID',
			name: 'roleId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Assign User Role operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/user/{userId}/role
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	const roleId = (this.getNodeParameter('roleId', _itemIndex ?? 0) || '') as string;
	body['roleId'] = roleId;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/user/${userId}/role`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
