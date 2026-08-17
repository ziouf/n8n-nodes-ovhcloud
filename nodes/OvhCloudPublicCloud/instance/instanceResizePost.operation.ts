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
			displayName: 'Flavor ID',
			name: 'flavorId',
			type: 'string',
			default: '',
			required: true,
			description: 'The UUID of the new flavor to resize to',
			displayOptions,
		},
	];
}

/**
 * Executes the Resize Instance operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/instance/{instanceId}/resize
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	const flavorId = (this.getNodeParameter('flavorId', _itemIndex ?? 0) || '') as string;
	body['flavorId'] = flavorId;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/instance/${instanceId}/resize`,
		body as IDataObject,
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
