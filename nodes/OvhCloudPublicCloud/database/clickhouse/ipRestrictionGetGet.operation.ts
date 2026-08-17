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
	];
}

/**
 * Executes the Get Clickhouse IP Restriction operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/clickhouse/{clusterId}/ipRestrictions/{ipRestrictionId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const ipRestrictionId = this.getNodeParameter('ipRestrictionId', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const data = (await client.httpGet(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/ipRestrictions/${ipRestrictionId}`)) as import('n8n-workflow').IDataObject;

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}
	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}

