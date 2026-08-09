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
			displayName: 'Destinationserviceid',
			name: 'destinationServiceId',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Kind',
			name: 'kind',
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
 * Executes the Create Kafka MirrorMaker Log Subscription.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/log/subscription
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const destinationServiceId = this.getNodeParameter('destinationServiceId', _itemIndex ?? 0) as string;
	const kind = this.getNodeParameter('kind', _itemIndex ?? 0) as string;
	const sourceServiceId = this.getNodeParameter('sourceServiceId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (destinationServiceId) body.destinationServiceId = destinationServiceId;

	if (kind) body.kind = kind;

	if (sourceServiceId) body.sourceServiceId = sourceServiceId;
	const data = (await client.httpPost(`/cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/log/subscription`, body )) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
