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
			displayName: 'Availability Zone',
			name: 'availabilityZone',
			type: 'string',
			default: '',
			required: true,
			description: 'The availability zone for the volume (e.g. GRA63)',
			displayOptions,
		},
		{
			displayName: 'Volume Size (Bytes)',
			name: 'volumeSize',
			type: 'number',
			default: 0,
			required: true,
			description: 'The volume size in bytes',
			displayOptions,
		},
		{
			displayName: 'Volume Type ID',
			name: 'volumeTypeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The UUID of the volume type (e.g. 0d37f84a-96c1-4b56-b2cd-c3efdc0cb6eb)',
			displayOptions,
		},
		{
			displayName: 'Volume Name',
			name: 'volumeName',
			type: 'string',
			default: '',
			description: 'A human-readable name for the volume (optional)',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			typeOptions: { rows: 3 },
			default: '',
			description: 'A human-readable description for the volume (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Volume operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/blockStorage/volume
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const availabilityZone = this.getNodeParameter('availabilityZone', 0) as string;
	const volumeSize = Number(this.getNodeParameter('volumeSize', 0)) as number;
	const volumeTypeId = this.getNodeParameter('volumeTypeId', 0) as string;

	const body = {
		availabilityZone,
		size: volumeSize,
		volumeType: { id: volumeTypeId },
	} as Record<string, unknown>;

	const name = (this.getNodeParameter('volumeName', 0) || '') as string;
	if (name !== '') {
		body.name = name;
	}

	const desc = (this.getNodeParameter('description', 0) || '') as string;
	if (desc !== '') {
		body.description = desc;
	}

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/blockStorage/volume`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
