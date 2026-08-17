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
			displayName: 'Clusterid',
			name: 'clusterId',
			type: 'string',
			required: true,
			default: '',
			description: 'ClusterId parameter',
			displayOptions,
		},
		{
			displayName: 'Topicid',
			name: 'topicId',
			type: 'string',
			required: true,
			default: '',
			description: 'TopicId parameter',
			displayOptions,
		}
	];
}

/**
 * Executes the OPERATION_NAME_PLACEHOLDER.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/kafka/{clusterId}/topic/{topicId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const topicId = this.getNodeParameter('topicId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const body: IDataObject = {};
	const name = (this.getNodeParameter('name', _itemIndex ?? 0) || '') as string;
	if (name) body.name = name;
	const numberOfPartitions = Number(this.getNodeParameter('numberOfPartitions', _itemIndex ?? 0) || 0);
	if (numberOfPartitions) body.numberOfPartitions = numberOfPartitions;
	const replicationFactor = Number(this.getNodeParameter('replicationFactor', _itemIndex ?? 0) || 0);
	if (replicationFactor) body.replicationFactor = replicationFactor;

	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/database/kafka/${clusterId}/topic/${topicId}`,
		body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
