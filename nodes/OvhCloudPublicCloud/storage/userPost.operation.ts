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
			displayName: 'Container ID',
			name: 'containerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The container name/ID',
			displayOptions,
		},
		{
			displayName: 'Right',
			name: 'right',
			type: 'options',
			options: [
				{ name: 'Read Only', value: 'read' },
				{ name: 'Write Only', value: 'write' },
				{ name: 'Read and Write', value: 'all' },
			],
			default: 'read',
			required: true,
			description: 'User right (all, read, write)',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'User description',
			displayOptions,
		},
	];
}

/**
 * Executes the Create OpenStack User operation on a SWIFT container.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{projectId}/storage/{containerId}/user
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const containerId = this.getNodeParameter('containerId', 0) as string;

	const body: IDataObject = {};
	body['right'] = this.getNodeParameter('right', 0) as string;
	const desc = this.getNodeParameter('description', 0) as string;
	if (desc) body['description'] = desc;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/storage/${containerId}/user`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
