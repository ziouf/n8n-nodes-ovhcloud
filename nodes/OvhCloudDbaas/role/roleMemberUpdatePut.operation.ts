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
			displayName: 'Service Name',
			name: 'serviceName',
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
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'The username identifier',
			displayOptions,
		},
		{
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '',
			description: 'Request body (dbaas.logs.RoleMemberUpdate)',
			displayOptions,
		},
	];
}

/**
 * Executes the PUT roleMemberUpdatePut operation.
 *
 * HTTP method: PUT
 * Endpoint: /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const roleId = this.getNodeParameter('roleId', _itemIndex) as string;
	const username = this.getNodeParameter('username', _itemIndex) as string;
	const bodyJson = (this.getNodeParameter('body', _itemIndex, '') as string) || '';
	const body: IDataObject = {};
	if (bodyJson) {
		Object.assign(body, JSON.parse(bodyJson));
	}
	const client = getClient(this);
	const data = (await client.httpPut(`/dbaas/logs/${encodeURIComponent(serviceName)}/role/${encodeURIComponent(roleId)}/member/${encodeURIComponent(username)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
