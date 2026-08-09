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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Permission ID',
			name: 'permissionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The permissionId identifier',
			displayOptions,
		},
		{
			displayName: 'Role ID',
			name: 'roleId',
			type: 'string',
			default: '',
			required: true,
			description: 'The roleId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the GET rolePermissionGetGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const permissionId = this.getNodeParameter('permissionId', _itemIndex) as string;
	const roleId = this.getNodeParameter('roleId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/role/${encodeURIComponent(roleId)}/permission/${encodeURIComponent(permissionId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
