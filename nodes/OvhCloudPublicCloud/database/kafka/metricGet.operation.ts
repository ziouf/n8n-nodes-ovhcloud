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
			displayName: 'Metricname',
			name: 'metricName',
			type: 'string',
			required: true,
			default: '',
			description: 'MetricName parameter',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'string',
			default: '',
			description: 'Period parameter',
			displayOptions,
		}
	];
}

/**
 * Executes the OPERATION_NAME_PLACEHOLDER.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/kafka/{clusterId}/metric/{metricName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const metricName = this.getNodeParameter('metricName', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const qs: IDataObject = {};
	const period = (this.getNodeParameter('period', _itemIndex ?? 0) || '') as string;
	if (period) qs.period = period;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/database/kafka/${clusterId}/metric/${metricName}`,
		qs
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
