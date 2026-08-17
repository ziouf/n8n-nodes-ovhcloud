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
		displayName: 'Network',
		name: 'network',
		type: 'string',
		default: '',
		required: true,
		description: 'IP block in CIDR notation',
		displayOptions,
	},
	];
}

/**
 * Executes the Create Clickhouse IP Restriction operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/ipRestrictions
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const network = (this.getNodeParameter('network', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (network) body.network = network;

	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/ipRestrictions`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

