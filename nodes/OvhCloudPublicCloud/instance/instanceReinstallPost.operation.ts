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
			displayName: 'Image ID',
			name: 'imageId',
			type: 'string',
			default: '',
			required: true,
			description:
				'The UUID of the image to reinstall with (e.g. 6b17b8d2-e4f2-4b5e-b2a1-3c9d8e7f6a5b)',
			displayOptions,
		},
		{
			displayName: 'Keep Volume',
			name: 'keepVolume',
			type: 'boolean',
			default: false,
			description: 'Whether to keep the existing volume (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the Reinstall Instance operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/instance/{instanceId}/reinstall
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;
	const imageId = (this.getNodeParameter('imageId', 0) || '') as string;
	const keepVolume = this.getNodeParameter('keepVolume', 0) as boolean;

	const body: IDataObject = { imageId, keepVolume };

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/instance/${instanceId}/reinstall`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
