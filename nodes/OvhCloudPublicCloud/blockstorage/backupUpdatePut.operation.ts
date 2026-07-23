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
			displayName: 'Backup ID',
			name: 'backupId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The backup UUID (e.g. a1b2c3d4-e5f6-7890-abcd-ef1234567890)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudBlockStorageBackups' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Checksum',
			name: 'checksum',
			type: 'string',
			default: '',
			required: true,
			description:
				'A checksum for concurrent modification control (e.g. a1b2c3d4-e5f6-7890-abcd-ef1234567890)',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Backup operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/blockStorage/backup/{backupId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const backupId = this.getNodeParameter('backupId', 0, '', { extractValue: true }) as string;

	const body: Record<string, unknown> = {};

	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/blockStorage/backup/${backupId}`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
