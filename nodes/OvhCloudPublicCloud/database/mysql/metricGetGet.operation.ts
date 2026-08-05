import type {
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
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The MySQL cluster ID',
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
			type: 'options',
			default: '1h',
			options: [
				{ name: '1 Week', value: '1week' },
				{ name: '1h', value: '1h' },
				{ name: '24h', value: '24h' },
				{ name: '6h', value: '6h' },
				{ name: '72h', value: '72h' },
			],
			description: 'The period for the metric data',
			displayOptions,
		},
	];
}

/**
 * Executes the Get MySQL Metric Values operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/mysql/{clusterId}/metric/{metricName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const metricName = this.getNodeParameter('metricName', 0) as string;
	const period = this.getNodeParameter('period', 0) as string;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/database/mysql/${clusterId}/metric/${encodeURIComponent(metricName)}`,
		{ qs: { period } },
	)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
