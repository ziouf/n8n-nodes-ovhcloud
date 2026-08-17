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
			default: '' ,
			required: true,
			description: 'ClusterId ID',
			displayOptions,
		},
		{
			displayName: 'Metricname',
			name: 'metricName',
			type: 'string',
			default: '' ,
			required: true,
			description: 'MetricName ID',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'string',
			default: '' ,
			required: true,
			description: 'Optional period',
			displayOptions,
		},
	];
}

/**
 * Executes the Get a metric.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/metric/{metricName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
const client = getClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
const metricName = this.getNodeParameter('metricName', _itemIndex ?? 0) as string;
const period = this.getNodeParameter('period', _itemIndex ?? 0, undefined) as string | undefined;
const data = (await client.httpGet(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}/metric/${metricName}`, { period: period })) as IDataObject;
return this.helpers.returnJsonArray([data]);
}
