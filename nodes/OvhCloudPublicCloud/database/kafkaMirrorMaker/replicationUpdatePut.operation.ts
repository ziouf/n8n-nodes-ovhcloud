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
			default: '',
			required: true,
			description: 'The Public Cloud project ID',
			typeOptions: { searchListMethod: 'getPublicCloudProjects' },
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
		},
		{
			displayName: 'Replication ID',
			name: 'replicationId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Destinationserviceid',
			name: 'destinationServiceId',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Sourceserviceid',
			name: 'sourceServiceId',
			type: 'string',
			default: '',
			displayOptions,
		}
	];
}

/**
 * Executes the Update Kafka MirrorMaker Replication.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/replication/${replicationId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const replicationId = this.getNodeParameter('replicationId', _itemIndex ?? 0) as string;
	const destinationServiceId = this.getNodeParameter('destinationServiceId', _itemIndex ?? 0) as string;
	const sourceServiceId = this.getNodeParameter('sourceServiceId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (destinationServiceId) body.destinationServiceId = destinationServiceId;

	if (sourceServiceId) body.sourceServiceId = sourceServiceId;
	const data = (await client.httpPut(`/cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/replication/${replicationId}`, body )) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
