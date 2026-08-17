import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
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
			displayName: 'Instance ID',
			name: 'instanceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The UUID of the instance (e.g. 12345678-1234-1234-1234-1234567890ab)',
			displayOptions,
		},
		{
			displayName: 'Rescue Mode',
			name: 'rescue',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether to enable or disable rescue mode',
			displayOptions,
		},
		{
			displayName: 'Image ID',
			name: 'imageId',
			type: 'string',
			default: '',
			description: 'The UUID of the rescue image to boot with (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the Rescue Mode Instance operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/instance/{instanceId}/rescueMode
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	const rescue = this.getNodeParameter('rescue', _itemIndex ?? 0) as boolean;
	body['rescue'] = rescue;
	const imageId = (this.getNodeParameter('imageId', _itemIndex ?? 0) || '') as string;
	if (imageId !== '') {
		body['imageId'] = imageId;
	}

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/instance/${instanceId}/rescueMode`,
		body as IDataObject,
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
