import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;

	const body: IDataObject = {};
	const rescue = this.getNodeParameter('rescue', 0) as boolean;
	body['rescue'] = rescue;
	const imageId = (this.getNodeParameter('imageId', 0) || '') as string;
	if (imageId !== '') {
		body['imageId'] = imageId;
	}

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/instance/${instanceId}/rescueMode`,
		body as IDataObject,
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
