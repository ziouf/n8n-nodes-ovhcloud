import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Availability Zone',
			name: 'availabilityZone',
			type: 'string',
			default: '',
			required: true,
			description: 'The availability zone for the instance (e.g. GRA63)',
			displayOptions,
		},
		{
			displayName: 'Flavor ID',
			name: 'flavorId',
			type: 'string',
			default: '',
			required: true,
			description: 'The UUID of the flavor (e.g. s1-8-40)',
			displayOptions,
		},
		{
			displayName: 'Image ID',
			name: 'imageId',
			type: 'string',
			default: '',
			required: true,
			description: 'The UUID of the image (e.g. 6b17b8d2-e4f2-4b5e-b2a1-3c9d8e7f6a5b)',
			displayOptions,
		},
		{
			displayName: 'Network ID',
			name: 'networkId',
			type: 'string',
			default: '',
			description: 'The UUID of the network to attach (optional)',
			displayOptions,
		},
		{
			displayName: 'Name Prefix',
			name: 'namePrefix',
			type: 'string',
			default: '',
			description: 'A human-readable name prefix for the instance (optional)',
			displayOptions,
		},
		{
			displayName: 'Tags',
			name: 'tags',
			type: 'string',
			default: '',
			description: 'Comma-separated list of tags for the instance (optional)',
			displayOptions,
		},
		{
			displayName: 'UserData',
			name: 'userData',
			type: 'string',
			typeOptions: { rows: 4 },
			default: '',
			description: 'Cloud-init user data script (optional)',
			displayOptions,
		},
		{
			displayName: 'Volume Type',
			name: 'volumeType',
			type: 'string',
			default: '',
			description: 'The volume type for the root disk (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Instance operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/instance
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const availabilityZone = (this.getNodeParameter('availabilityZone', _itemIndex ?? 0) || '') as string;
	const flavorId = (this.getNodeParameter('flavorId', _itemIndex ?? 0) || '') as string;
	const imageId = (this.getNodeParameter('imageId', _itemIndex ?? 0) || '') as string;

	const body: IDataObject = {
		availabilityZone,
		flavorId,
		imageId,
	};

	const networkId = (this.getNodeParameter('networkId', _itemIndex ?? 0) || '') as string;
	if (networkId !== '') {
		body.networkId = networkId;
	}

	const namePrefix = (this.getNodeParameter('namePrefix', _itemIndex ?? 0) || '') as string;
	if (namePrefix !== '') {
		body.namePrefix = namePrefix;
	}

	const tags = (this.getNodeParameter('tags', _itemIndex ?? 0) || '') as string;
	if (tags !== '') {
		body.tags = tags.split(',').map((t: string) => t.trim());
	}

	const userData = (this.getNodeParameter('userData', _itemIndex ?? 0) || '') as string;
	if (userData !== '') {
		body.userData = userData;
	}

	const volumeType = (this.getNodeParameter('volumeType', _itemIndex ?? 0) || '') as string;
	if (volumeType !== '') {
		body.volumeType = volumeType;
	}

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/instance`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
