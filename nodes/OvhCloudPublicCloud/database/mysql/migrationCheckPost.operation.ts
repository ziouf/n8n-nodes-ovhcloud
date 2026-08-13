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
			description: 'The MySQL cluster ID',
			displayOptions,
		},
		{
			displayName: 'Source Host',
			name: 'sourceHost',
			type: 'string',
			default: '',
			required: true,
			description: 'Source MySQL host',
			displayOptions,
		},
		{
			displayName: 'Source Username',
			name: 'sourceUsername',
			type: 'string',
			default: '',
			required: true,
			description: 'Source MySQL username',
			displayOptions,
		},
		{
			displayName: 'Source Password',
			name: 'sourcePassword',
			type: 'string',
			default: '',
			typeOptions: { password: true },
			required: true,
			description: 'Source MySQL user password',
			displayOptions,
		},
		{
			displayName: 'Source Port',
			name: 'sourcePort',
			type: 'number',
			default: 0,
			description: 'Source MySQL port',
			displayOptions,
		},
		{
			displayName: 'Source SSL',
			name: 'sourceSsl',
			type: 'boolean',
			default: false,
			description: 'Whether to enable SSL for the source MySQL connection',
			displayOptions,
		},
	];
}

/**
 * Executes the Create MySQL Migration Check operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/mysql/{clusterId}/migration/check
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const sourceHost = (this.getNodeParameter('sourceHost', _itemIndex ?? 0) || '') as string;
	const sourceUsername = (this.getNodeParameter('sourceUsername', _itemIndex ?? 0) || '') as string;
	const sourcePassword = (this.getNodeParameter('sourcePassword', _itemIndex ?? 0) || '') as string;
	const sourcePort = this.getNodeParameter('sourcePort', _itemIndex ?? 0) as number;
	const sourceSsl = this.getNodeParameter('sourceSsl', _itemIndex ?? 0) as boolean;

	const body: IDataObject = { sourceHost, sourceUsername, sourcePassword };
	if (sourcePort) body.sourcePort = sourcePort;
	if (sourceSsl) body.sourceSsl = sourceSsl;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/mysql/${clusterId}/migration/check`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
