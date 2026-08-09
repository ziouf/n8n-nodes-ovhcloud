import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
	const client = new ApiClient(this);
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
