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
			displayName: 'Instance ID',
			name: 'instanceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The UUID of the instance to update (e.g. 12345678-1234-1234-1234-1234567890ab)',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'A new human-readable name for the instance (optional)',
			displayOptions,
		},
		{
			displayName: 'Tags',
			name: 'tags',
			type: 'string',
			default: '',
			description: 'Comma-separated list of tags (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Instance operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/instance/{instanceId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;

	const body: IDataObject = {};

	const name = (this.getNodeParameter('name', 0) || '') as string;
	if (name !== '') {
		body.name = name;
	}

	const tags = (this.getNodeParameter('tags', 0) || '') as string;
	if (tags !== '') {
		body.tags = tags.split(',').map((t: string) => t.trim());
	}

	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/instance/${instanceId}`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
