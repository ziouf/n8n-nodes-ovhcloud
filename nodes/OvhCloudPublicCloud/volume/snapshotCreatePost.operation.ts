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
			displayName: 'Volume ID',
			name: 'volumeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The volume',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Snapshot name',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Snapshot description',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Volume Snapshot operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{projectId}/volume/{volumeId}/snapshot
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const volumeId = this.getNodeParameter('volumeId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	if (name) body['name'] = name;
	const desc = this.getNodeParameter('description', _itemIndex ?? 0) as string;
	if (desc) body['description'] = desc;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/volume/${volumeId}/snapshot`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
