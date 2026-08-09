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
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Since',
			name: 'since',
			type: 'string',
			default: '',
			displayOptions,
		}
	];
}

/**
 * Executes the Generate Kafka MirrorMaker Log URL.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/log/url
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const kind = this.getNodeParameter('kind', _itemIndex ?? 0) as string;
	const region = this.getNodeParameter('region', _itemIndex ?? 0) as string;
	const since = this.getNodeParameter('since', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (kind) body.kind = kind;

	if (region) body.region = region;

	if (since) body.since = since;
	const data = (await client.httpPost(`/cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/log/url`, body )) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
