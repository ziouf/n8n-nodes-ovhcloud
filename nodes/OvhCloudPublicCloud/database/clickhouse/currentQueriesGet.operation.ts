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
		displayOptions,
	},
{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		
		description: 'Max number of results to return',
		displayOptions,
	},
{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		default: 0,
		
		description: 'Offset for pagination',
		displayOptions,
	},
	];
}

/**
 * Executes the List Clickhouse Current Queries operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/currentQueries
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const limit = this.getNodeParameter('limit', _itemIndex ?? 0, 0) as number;
	const offset = this.getNodeParameter('offset', _itemIndex ?? 0, 0) as number;

	const data = (await client.httpGet(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/currentQueries`, { limit, offset })) as import('n8n-workflow').IDataObject;

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}
	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}

