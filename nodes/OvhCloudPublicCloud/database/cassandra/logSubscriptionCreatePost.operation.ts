import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Cassandra cluster ID',
			displayOptions,
		},
		{
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			description: 'The log kind',
			displayOptions,
		},
		{
			displayName: 'Stream ID',
			name: 'streamId',
			type: 'string',
			default: '',
			description: 'The Kafka stream ID for the log subscription',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Cassandra Log Subscription operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/cassandra/{clusterId}/log/subscription
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const kind = (this.getNodeParameter('kind', _itemIndex ?? 0, '') || '') as string;
	const streamId = (this.getNodeParameter('streamId', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (kind) body.kind = kind;
	if (streamId) body.streamId = streamId;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/database/cassandra/${clusterId}/log/subscription`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
