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
			displayName: 'Role ID',
			name: 'roleId',
			type: 'string',
			default: '',
			required: true,
			description: 'The roleId identifier',
			displayOptions,
		},
		{
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '',
			description: 'Request body (dbaas.logs.RolePermissionIndexCreation)',
			displayOptions,
		},
	];
}

/**
 * Executes the POST rolePermissionIndexCreatePost operation.
 *
 * HTTP method: POST
 * Endpoint: /dbaas/logs/{serviceName}/role/{roleId}/permission/index
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const roleId = this.getNodeParameter('roleId', itemIndex) as string;
	const bodyJson = (this.getNodeParameter('body', itemIndex, '') as string) || '';
	const body: IDataObject = {};
	if (bodyJson) {
		Object.assign(body, JSON.parse(bodyJson));
	}
	const client = new ApiClient(this);
	const data = (await client.httpPost(`/dbaas/logs/${encodeURIComponent(serviceName)}/role/${encodeURIComponent(roleId)}/permission/index`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
