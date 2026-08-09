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
			displayName: 'Volume ID',
			name: 'volumeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The volume identifier',
			displayOptions,
		},
		{
			displayName: 'New Size',
			name: 'size',
			type: 'number',
			default: 0,
			required: true,
			description: 'New volume size (in GiB) (must be greater than current one)',
			displayOptions,
		},
	];
}

/**
 * Executes the Upsize Volume operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{projectId}/volume/{volumeId}/upsize
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const volumeId = this.getNodeParameter('volumeId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	body['size'] = this.getNodeParameter('size', _itemIndex ?? 0) as number;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/volume/${volumeId}/upsize`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
