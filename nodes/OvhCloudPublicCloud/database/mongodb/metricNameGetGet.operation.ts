import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getPublicCloudProjects',
				displayName: 'Service Name',
				description: 'The database service name',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
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
			displayOptions,
		},
	];
}
/**
 * Executes the Get MongoDB Metric operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/metric/{metricName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const metricName = this.getNodeParameter('metricName', _itemIndex ?? 0) as string;
	const period = this.getNodeParameter('period', _itemIndex ?? 0, '') as string;

	const qs: IDataObject = {
    period: period || undefined
  };
	const client = getClient(this);
	const data = (await client.httpGet(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/metric/${metricName}`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
