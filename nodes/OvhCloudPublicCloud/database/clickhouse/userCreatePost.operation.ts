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
		displayName: 'Public Cloud Project',
		name: 'publicCloudProjectId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				typeOptions: { searchListMethod: 'getPublicCloudProjects' },
			},
			{
				displayName: 'By ID',
				name: 'name',
				type: 'string',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			},
		],
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
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'Name of the user',
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
 * Executes the Create Clickhouse User operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/user
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const name = (this.getNodeParameter('name', _itemIndex ?? 0, '') || '') as string;
	const roles = (this.getNodeParameter('roles', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (name) body.name = name;
	if (roles) body.roles = roles;

	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/user`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

