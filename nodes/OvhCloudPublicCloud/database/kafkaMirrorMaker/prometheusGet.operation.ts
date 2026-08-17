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
			description: 'The Kafka MirrorMaker cluster ID',
			displayOptions,
		}
	];
}

/**
 * Executes the Get Kafka MirrorMaker Prometheus.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/prometheus
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(`/cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/prometheus`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
