import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will permanently delete the CORS policy. This action is irreversible.', displayOptions),
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
			description: 'The container name/ID',
			displayOptions,
		},
		{
			displayName: 'Origin',
			name: 'origin',
			type: 'string',
			default: '',
			required: true,
			description: 'The origin URL to remove CORS for',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete CORS operation on a SWIFT container.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{projectId}/storage/{containerId}/cors
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const containerId = this.getNodeParameter('containerId', _itemIndex ?? 0) as string;
	const origin = this.getNodeParameter('origin', _itemIndex ?? 0) as string;

	await client.httpDelete(`/cloud/project/${projectId}/storage/${containerId}/cors`, {
		origin,
	});

	return this.helpers.returnJsonArray([{ message: 'CORS deleted' }]);
}
