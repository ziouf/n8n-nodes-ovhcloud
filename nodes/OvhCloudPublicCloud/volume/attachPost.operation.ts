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
			displayName: 'Instance ID',
			name: 'instanceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The instance ID to attach the volume to',
			displayOptions,
		},
	];
}

/**
 * Executes the Attach Volume operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{projectId}/volume/{volumeId}/attach
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const volumeId = this.getNodeParameter('volumeId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	body['instanceId'] = this.getNodeParameter('instanceId', _itemIndex ?? 0) as string;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/volume/${volumeId}/attach`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
