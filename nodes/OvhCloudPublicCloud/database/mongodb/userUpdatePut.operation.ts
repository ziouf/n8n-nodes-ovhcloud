import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The database service name',
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const userId = this.getNodeParameter('userId', 0) as string;
	const password = this.getNodeParameter('password', 0, '') as string;
	const roles = this.getNodeParameter('roles', 0, '') as string;

	const body: IDataObject = {
    password: password || undefined,
    roles: roles || undefined
  };
	const client = new ApiClient(this);
	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/user/${userId}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
