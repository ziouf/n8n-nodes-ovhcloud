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
		displayName: 'Ip Restriction ID',
		name: 'ipRestrictionId',
		type: 'string',
		default: '',
		required: true,
		description: 'The Iprestriction ID',
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
 * Executes the Update Clickhouse IP Restriction operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/ipRestrictions/{ipRestrictionId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const ipRestrictionId = this.getNodeParameter('ipRestrictionId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const network = (this.getNodeParameter('network', _itemIndex ?? 0, '') || '') as string;

	const body: IDataObject = {};
	if (network) body.network = network;

	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/ipRestrictions/${ipRestrictionId}`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

