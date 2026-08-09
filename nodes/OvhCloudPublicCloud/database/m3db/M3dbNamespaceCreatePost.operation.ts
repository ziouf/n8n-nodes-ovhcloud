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
			description: 'The clusterId parameter',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
					description: 'Name parameter',
			displayOptions,
		},
		{
			displayName: 'Resolution',
			name: 'resolution',
			type: 'string',
			default: '',
			required: true,
					description: 'Resolution parameter',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
					description: 'Type parameter',
			displayOptions,
		},
		{
			displayName: 'Snapshot Enabled',
			name: 'snapshotEnabled',
			type: 'boolean',
			default: false,
			description: 'Whether snapshot is enabled',
			displayOptions,
		},
		{
			displayName: 'Writes To Commit Log Enabled',
			name: 'writesToCommitLogEnabled',
			type: 'boolean',
			default: false,
			description: 'Whether writes to commit log are enabled',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a new namespace on the m3db cluster operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/m3db/{clusterId}/namespace
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('name', _itemIndex ?? 0)) body.name = this.getNodeParameter('name', _itemIndex ?? 0);
	if (this.getNodeParameter('resolution', _itemIndex ?? 0))
		body.resolution = this.getNodeParameter('resolution', _itemIndex ?? 0);
	if (this.getNodeParameter('type', _itemIndex ?? 0)) body.type = this.getNodeParameter('type', _itemIndex ?? 0);
	if (this.getNodeParameter('snapshotEnabled', _itemIndex ?? 0))
		body.snapshotEnabled = this.getNodeParameter('snapshotEnabled', _itemIndex ?? 0);
	if (this.getNodeParameter('writesToCommitLogEnabled', _itemIndex ?? 0))
		body.writesToCommitLogEnabled = this.getNodeParameter('writesToCommitLogEnabled', _itemIndex ?? 0);

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/m3db/${clusterId}/namespace`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
