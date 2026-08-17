import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
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
			description: 'The container name/ID',
			displayOptions,
		},
		{
			displayName: 'Origin',
			name: 'origin',
			type: 'string',
			default: '',
			required: true,
			description: 'The origin URL to allow CORS for',
			displayOptions,
		},
	];
}

/**
 * Executes the Add CORS operation on a SWIFT container.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{projectId}/storage/{containerId}/cors
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const containerId = this.getNodeParameter('containerId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	body['origin'] = this.getNodeParameter('origin', _itemIndex ?? 0) as string;

	await client.httpPost(`/cloud/project/${projectId}/storage/${containerId}/cors`, body);

	return this.helpers.returnJsonArray([{ message: 'CORS added' }]);
}
