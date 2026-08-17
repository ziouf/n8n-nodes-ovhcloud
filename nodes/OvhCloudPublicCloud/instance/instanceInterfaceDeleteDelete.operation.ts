import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
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
			displayName: 'Interface ID',
			name: 'interfaceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The UUID of the interface (e.g. 12345678-1234-1234-1234-1234567890ab)',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Instance Interface operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', _itemIndex ?? 0) as string;
	const interfaceId = this.getNodeParameter('interfaceId', _itemIndex ?? 0) as string;
	await client.httpDelete(
		`/cloud/project/${serviceName}/instance/${instanceId}/interface/${interfaceId}`,
	);

	return this.helpers.returnJsonArray([{ deleted: interfaceId }]);
}
