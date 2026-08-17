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
			displayName: 'Region Name',
			name: 'regionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The region name (e.g. GRA63, BHS62)',
			displayOptions,
		},
		{
			displayName: 'Volume ID',
			name: 'volumeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The volume UUID (e.g. a1b2c3d4-e5f6-7890-abcd-ef1234567890)',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Volume operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/volume/{volumeId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const volumeId = this.getNodeParameter('volumeId', _itemIndex ?? 0) as string;

	await client.httpDelete(
		`/publicCloud/project/${projectId}/region/${regionName}/volume/${volumeId}`,
	);

	return this.helpers.returnJsonArray([{ deleted: volumeId }]);
}
