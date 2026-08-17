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
		displayName: 'Node ID',
		name: 'nodeId',
		type: 'string',
		default: '',
		required: true,
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
		displayName: 'Flavor',
		name: 'flavor',
		type: 'string',
		default: '',
		
		description: 'VM flavor for the node',
		displayOptions,
	},
	];
}

/**
 * Executes the Update Clickhouse Node operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/node/{nodeId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const nodeId = this.getNodeParameter('nodeId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const flavor = (this.getNodeParameter('flavor', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (flavor) body.flavor = flavor;

	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/node/${nodeId}`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

