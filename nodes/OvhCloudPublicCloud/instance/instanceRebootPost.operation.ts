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
			displayName: 'Reboot Type',
			name: 'type',
			type: 'options',
			default: 'soft',
			required: true,
			description: 'The type of reboot to perform',
			options: [
				{ name: 'Hard', value: 'hard' },
				{ name: 'Soft', value: 'soft' },
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Reboot Instance operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/instance/{instanceId}/reboot
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	const type = (this.getNodeParameter('type', _itemIndex ?? 0) || '') as string;
	body['type'] = type;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/instance/${instanceId}/reboot`,
		body as IDataObject,
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
