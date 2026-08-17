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
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Redis cluster ID',
			displayOptions,
		},
		{
			displayName: 'Extended',
			name: 'extended',
			type: 'boolean',
			default: false,
			description: 'Whether to display DB specific metrics',
			displayOptions,
		},
	];
}

/**
 * Executes the List Redis Metrics operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/redis/{clusterId}/metric
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const extended = this.getNodeParameter('extended', _itemIndex ?? 0) as boolean;

	const qs: IDataObject = {};
	if (extended) qs.extended = extended;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/database/redis/${clusterId}/metric`,
		qs,
	)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
