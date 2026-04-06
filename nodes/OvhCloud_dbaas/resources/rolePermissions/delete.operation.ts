import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete a permission from a role.
 *
 * HTTP method: DELETE
 * Endpoint: /dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}
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
			displayName: 'Permission ID',
			name: 'permissionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the permission to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Role Permission operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const roleId = this.getNodeParameter('roleId', 0) as string;
	const permissionId = this.getNodeParameter('permissionId', 0) as string;
	const data = (await client.httpDelete(
		`/dbaas/logs/${serviceName}/role/${roleId}/permission/${permissionId}`,
	)) as IDataObject;
	return [{ json: data }];
}
