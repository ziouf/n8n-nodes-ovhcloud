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
			displayName: 'Snapshot Name',
			name: 'snapshotName',
			type: 'string',
			default: '',
			required: true,
			description: 'A human-readable name for the snapshot',
			displayOptions,
		},
	];
}

/**
 * Executes the Snapshot Instance operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/instance/{instanceId}/snapshot
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	const snapshotName = (this.getNodeParameter('snapshotName', _itemIndex ?? 0) || '') as string;
	body['snapshotName'] = snapshotName;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/instance/${instanceId}/snapshot`,
		body as IDataObject,
	)) as INodeExecutionData;

	return this.helpers.returnJsonArray([data]);
}
