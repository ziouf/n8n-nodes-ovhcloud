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
			displayName: 'Container ID',
			name: 'containerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The container name/ID to deploy as static website',
			displayOptions,
		},
	];
}

/**
 * Executes the Deploy Static Website operation on a SWIFT container.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{projectId}/storage/{containerId}/static
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const containerId = this.getNodeParameter('containerId', _itemIndex ?? 0) as string;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/storage/${containerId}/static`,
		{},
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
