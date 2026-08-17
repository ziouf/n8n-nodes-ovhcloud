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
		displayOptions,
	},
{
		displayName: 'Extended',
		name: 'extended',
		type: 'boolean',
		default: false,
		
		description: 'Whether to include extended metrics',
		displayOptions,
	},
	];
}

/**
 * Executes the List Clickhouse Metrics operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/metric
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const extended = this.getNodeParameter('extended', _itemIndex ?? 0, false) as boolean;

	const body: IDataObject = {};
	body.extended = extended;

	const data = (await client.httpGet(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/metric`)) as import('n8n-workflow').IDataObject;

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}
	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}

