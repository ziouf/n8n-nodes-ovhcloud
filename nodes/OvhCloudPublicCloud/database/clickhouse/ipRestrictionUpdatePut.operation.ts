import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
{
		displayName: 'Public Cloud Project',
		name: 'publicCloudProjectId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				typeOptions: { searchListMethod: 'getPublicCloudProjects' },
			},
			{
				displayName: 'By ID',
				name: 'name',
				type: 'string',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			},
		],
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipRestrictionId = this.getNodeParameter('ipRestrictionId', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', { extractValue: true }) as string;
	const network = (this.getNodeParameter('network', 0, '') || '') as string;

	const body: IDataObject = {};
	if (network) body.network = network;

	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/clickhouse/${clusterId}/ipRestrictions/${ipRestrictionId}`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

