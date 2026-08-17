import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will reset the kafka Mirror Maker. This action is irreversible.', displayOptions),
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
			description: 'The Kafka MirrorMaker cluster ID',
			displayOptions,
		}
	];
}

/**
 * Executes the Reset Kafka MirrorMaker Prometheus Credentials.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/prometheus/credentials/reset
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const data = (await client.httpPost(`/cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/prometheus/credentials/reset`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
