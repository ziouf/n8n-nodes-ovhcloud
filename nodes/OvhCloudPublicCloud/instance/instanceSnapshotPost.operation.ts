import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
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
			displayName: 'Snapshot Name',
			name: 'snapshotName',
			type: 'string',
			default: '',
			description: 'A human-readable name for the snapshot (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Snapshot operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/instance/{instanceId}/snapshot
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;
	const snapshotName = (this.getNodeParameter('snapshotName', 0) || '') as string;

	const body: IDataObject = {};
	if (snapshotName !== '') {
		body.snapshotName = snapshotName;
	}

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/instance/${instanceId}/snapshot`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
