import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The PostgreSQL cluster ID',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Database name',
			displayOptions,
		},
		{
			displayName: 'Roles',
			name: 'roles',
			type: 'json',
			default: '{}',
			description: 'User roles as a JSON array of strings',
			displayOptions,
		},
	];
}

/**
 * Executes the Create PostgreSQL User operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/postgresql/{clusterId}/user
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const name = (this.getNodeParameter('name', _itemIndex ?? 0, '') || '') as string;
	const rolesJson = (this.getNodeParameter('roles', _itemIndex ?? 0, '[]') as string) || '[]';
	const roles = JSON.parse(rolesJson) as string[];
	const body: IDataObject = {};
	if (name) body.name = name;
	if (roles && roles.length) body.roles = roles;
	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/postgresql/${clusterId}/user`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
