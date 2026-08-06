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
			displayName: 'Metric Name',
			name: 'metricName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'string',
			default: '',
			required: true,
			description: 'The period of time to query metrics for (e.g., 24h, 7d)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Kafka MirrorMaker Metric.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/metric/${metricName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const publicCloudProjectId = this.getNodeParameter('publicCloudProjectId', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const metricName = this.getNodeParameter('metricName', 0) as string;
	const period = this.getNodeParameter('period', 0) as string;

	const qs: IDataObject = {};
	if (period) qs.period = period;

	const data = (await client.httpGet(`/cloud/project/${publicCloudProjectId}/database/kafkaMirrorMaker/${clusterId}/metric/${metricName}`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
