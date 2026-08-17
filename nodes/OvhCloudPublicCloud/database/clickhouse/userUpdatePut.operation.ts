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
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		default: '',
		required: true,
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
		displayName: 'Roles',
		name: 'roles',
		type: 'string',
		default: '',
		
		description: 'Roles the user belongs to (comma-separated)',
		displayOptions,
	},
	];
}

/**
 * Executes the Update Clickhouse User operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/user/{userId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const roles = (this.getNodeParameter('roles', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (roles) body.roles = roles;

	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/user/${userId}`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

