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
			displayName: 'User ID',
			name: 'userId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			required: true,
			description: 'Region of the rclone configuration',
			displayOptions,
		},
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			description: 'Rclone service to configure',
			displayOptions,
		},
	];
}

/**
 * Executes the Get User Rclone Config operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/user/{userId}/rclone
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;

	const qs: IDataObject = {};
	const region = (this.getNodeParameter('region', _itemIndex ?? 0) || '') as string;
	const service = (this.getNodeParameter('service', _itemIndex ?? 0) || '') as string;
	qs['region'] = region;
	if (service) {
		qs['service'] = service;
	}

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/user/${userId}/rclone`,
		qs as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
