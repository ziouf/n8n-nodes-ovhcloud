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
			description: 'The Redis cluster ID',
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
			displayName: 'Categories',
			name: 'categories',
			type: 'string',
			default: '',
			description: 'Categories of the user (comma-separated)',
			displayOptions,
		},
		{
			displayName: 'Channels',
			name: 'channels',
			type: 'string',
			default: '',
			description: 'Channels of the user (comma-separated)',
			displayOptions,
		},
		{
			displayName: 'Commands',
			name: 'commands',
			type: 'string',
			default: '',
			description: 'Commands of the user (comma-separated)',
			displayOptions,
		},
		{
			displayName: 'Keys',
			name: 'keys',
			type: 'string',
			default: '',
			description: 'Keys of the user (comma-separated)',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Redis User operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/redis/{clusterId}/user/{userId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;
	const categories = (this.getNodeParameter('categories', _itemIndex ?? 0) || '') as string;
	const channels = (this.getNodeParameter('channels', _itemIndex ?? 0) || '') as string;
	const commands = (this.getNodeParameter('commands', _itemIndex ?? 0) || '') as string;
	const keys = (this.getNodeParameter('keys', _itemIndex ?? 0) || '') as string;

	const body: IDataObject = {};
	if (categories) body.categories = categories.split(',');
	if (channels) body.channels = channels.split(',');
	if (commands) body.commands = commands.split(',');
	if (keys) body.keys = keys.split(',');

	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/database/redis/${clusterId}/user/${userId}`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
