import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Backup Name',
			name: 'backupTargetSpecName',
			type: 'string',
			default: '',
			required: true,
			description: 'A human-readable name for the backup (optional)',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'backupTargetSpecDescription',
			type: 'string',
			typeOptions: { rows: 3 },
			default: '',
			description: 'A human-readable description for the backup (optional)',
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'backupTargetSpecLocationRegion',
			type: 'string',
			default: '',
			required: true,
			description: 'The region where the backup should be stored (e.g. GRA63)',
			displayOptions,
		},
		{
			displayName: 'Volume ID',
			name: 'volumeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The UUID of the volume to backup (e.g. a1b2c3d4-e5f6-7890-abcd-ef1234567890)',
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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const name = (this.getNodeParameter('backupTargetSpecName', _itemIndex ?? 0) || '') as string;
	const description = (this.getNodeParameter('backupTargetSpecDescription', _itemIndex ?? 0) || '') as string;
	const region = this.getNodeParameter('backupTargetSpecLocationRegion', _itemIndex ?? 0) as string;
	const volumeId = this.getNodeParameter('volumeId', _itemIndex ?? 0) as string;

	const body = {
		targetSpec: {
			name,
			location: { region },
			volumeId,
		},
	} as { targetSpec: Record<string, unknown> };

	if (description !== '') {
		body.targetSpec.description = description;
	}

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/blockStorage/backup`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
