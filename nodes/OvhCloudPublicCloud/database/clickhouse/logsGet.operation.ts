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
		displayName: 'Kind',
		name: 'kind',
		type: 'string',
		default: '',
		
		description: 'Log kind name',
		displayOptions,
	},
	];
}

/**
 * Executes the Get Clickhouse Logs operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/log
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const kind = (this.getNodeParameter('kind', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (kind) body.kind = kind;

	const data = (await client.httpGet(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/log`)) as import('n8n-workflow').IDataObject;

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}
	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}

