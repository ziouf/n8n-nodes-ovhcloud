import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
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
			displayName: 'Volume ID',
			name: 'volumeId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The volume UUID (e.g. a1b2c3d4-e5f6-7890-abcd-ef1234567890)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudBlockStorageVolumes' },
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
	];
}

/**
 * Executes the Delete Volume operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/{projectId}/blockStorage/volume/{volumeId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const volumeId = this.getNodeParameter('volumeId', _itemIndex ?? 0, '', { extractValue: true }) as string;

	await client.httpDelete(`/publicCloud/project/${projectId}/blockStorage/volume/${volumeId}`);

	return this.helpers.returnJsonArray([{ deleted: volumeId }]);
}
