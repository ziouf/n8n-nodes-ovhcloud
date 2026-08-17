import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
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
			description: 'The metric period (e.g. 24h, 7d)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Cassandra Metric Values operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/cassandra/{clusterId}/metric/{metricName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const metricName = this.getNodeParameter('metricName', _itemIndex ?? 0) as string;
	const period = this.getNodeParameter('period', _itemIndex ?? 0) as string;

	const qs: import('n8n-workflow').IDataObject = {};
	if (period) qs.period = period;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/database/cassandra/${clusterId}/metric/${metricName}`,
		{ qs },
	)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data as INodeExecutionData]);
}
