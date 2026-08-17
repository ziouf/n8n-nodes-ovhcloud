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
			displayName: 'Cluster ID',
			name: "clusterId",
			type: "string",
			required: true,
			default: "",
			description: "The clusterId parameter",
			displayOptions,
		},
		{
			displayName: "Metric Name",
			name: "metricName",
			type: "string",
			required: true,
			default: "",
			description: "The metricName parameter",
			displayOptions,
		},
		{
			displayName: "Period",
			name: "period",
			type: "string",
			required: true,
			default: "",
			description: "The period parameter",
			displayOptions,
		}
	];
}

/**
 * Executes the Get Metric operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/opensearch/{clusterId}/metric/{metricName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0, '') as string;
	const metricName = this.getNodeParameter('metricName', _itemIndex ?? 0, '') as string;
	const period = this.getNodeParameter('period', _itemIndex ?? 0, '') as string;

	const qs: IDataObject = {};
	if (period) qs['period'] = period;
	const data = (await client.httpGet(`/cloud/project/${serviceName}/database/opensearch/${clusterId}/metric/${metricName}`, qs)) as IDataObject;

	if (Array.isArray(data)) {
		return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
	}
	return this.helpers.returnJsonArray([data]);
}
