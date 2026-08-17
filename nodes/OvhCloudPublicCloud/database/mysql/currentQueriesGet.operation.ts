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
			description: 'The MySQL cluster ID',
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
			description: 'Number of queries to skip',
			displayOptions,
		},
	];
}

/**
 * Executes the Get MySQL Current Queries operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/mysql/{clusterId}/currentQueries
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const limit = this.getNodeParameter('limit', _itemIndex ?? 0) as number;
	const offset = this.getNodeParameter('offset', _itemIndex ?? 0) as number;

	const qs: IDataObject = {};
	if (limit) qs.limit = limit;
	if (offset) qs.offset = offset;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/database/mysql/${clusterId}/currentQueries`,
		qs,
	)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
