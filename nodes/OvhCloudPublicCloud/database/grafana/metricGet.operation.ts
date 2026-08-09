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
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Grafana cluster ID',
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
			default: 'lastDay',
			required: true,
			options: [
				{ name: 'Last Day', value: 'lastDay' },
				{ name: 'Last Hour', value: 'lastHour' },
				{ name: 'Last Month', value: 'lastMonth' },
				{ name: 'Last Week', value: 'lastWeek' },
				{ name: 'Last Year', value: 'lastYear' },
			],
			description: 'Metrics query period',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Grafana Metric operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/grafana/{clusterId}/metric/{metricName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const metricName = this.getNodeParameter('metricName', _itemIndex ?? 0) as string;
	const period = this.getNodeParameter('period', _itemIndex ?? 0) as string;

	const qs: IDataObject = { period };
	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/database/grafana/${clusterId}/metric/${encodeURIComponent(metricName)}`,
		qs,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
