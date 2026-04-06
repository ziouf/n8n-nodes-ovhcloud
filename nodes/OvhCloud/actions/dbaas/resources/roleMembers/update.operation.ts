import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update a member for a role.
 *
 * HTTP method: PUT
 * Endpoint: /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the DBaaS log service',
			displayOptions,
		},
		{
			displayName: 'Role ID',
			name: 'roleId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the role',
			displayOptions,
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			description: 'The username of the member to update',
			displayOptions,
		},
		{
			displayName: 'Raw Body (JSON)',
			name: 'rawBody',
			type: 'json',
			default: '{}',
			description: 'Member fields to update as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Role Member operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const roleId = this.getNodeParameter('roleId', 0) as string;
	const username = this.getNodeParameter('username', 0) as string;
	const rawBody = this.getNodeParameter('rawBody', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPut(
		`/dbaas/logs/${serviceName}/role/${roleId}/member/${username}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
