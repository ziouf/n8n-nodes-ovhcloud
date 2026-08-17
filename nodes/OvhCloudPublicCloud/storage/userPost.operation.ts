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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const containerId = this.getNodeParameter('containerId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	body['right'] = this.getNodeParameter('right', _itemIndex ?? 0) as string;
	const desc = this.getNodeParameter('description', _itemIndex ?? 0) as string;
	if (desc) body['description'] = desc;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/storage/${containerId}/user`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
