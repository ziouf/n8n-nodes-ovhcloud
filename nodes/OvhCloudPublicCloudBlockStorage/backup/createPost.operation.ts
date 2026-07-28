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
			displayName: 'Source Volume ID (Optional)',
			name: 'volumeId',
			type: 'string',
			default: '',
			description: 'The UUID of the volume to backup from. Use either this or snapshotId.',
			displayOptions,
		},
		{
			displayName: 'Source Snapshot ID (Optional)',
			name: 'snapshotId',
			type: 'string',
			default: '',
			description: 'The UUID of the snapshot to backup from. Use either this or volumeId.',
			displayOptions,
		},
		{
			displayName: 'Backup Name (Optional)',
			name: 'backupTargetSpecName',
			type: 'string',
			default: '',
			description: 'A human-readable name for the backup',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Backup operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/blockStorage/backup
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;

	const volumeId = (this.getNodeParameter('volumeId', 0) || '') as string;
	const snapshotId = (this.getNodeParameter('snapshotId', 0) || '') as string;
	const name = (this.getNodeParameter('backupTargetSpecName', 0) || '') as string;

	if (!volumeId && !snapshotId) {
		throw new Error('Either volumeId or snapshotId is required to create a backup.');
	}

	const body: Record<string, unknown> = {};

	if (name !== '') {
		body.name = name;
	}

	if (volumeId) {
		body.volumeId = volumeId;
	} else if (snapshotId) {
		body.snapshotId = snapshotId;
	}

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/blockStorage/backup`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
