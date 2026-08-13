import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getPublicCloudProjects',
				displayName: 'Service Name',
				description: 'The database service name',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
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
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			displayOptions,
		},
		{
			displayName: 'Roles',
			name: 'roles',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}
/**
 * Executes the Update MongoDB User operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/user/{userId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;
	const password = this.getNodeParameter('password', _itemIndex ?? 0, '') as string;
	const roles = this.getNodeParameter('roles', _itemIndex ?? 0, '') as string;

	const body: IDataObject = {
    password: password || undefined,
    roles: roles || undefined
  };
	const client = getClient(this);
	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/user/${userId}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
