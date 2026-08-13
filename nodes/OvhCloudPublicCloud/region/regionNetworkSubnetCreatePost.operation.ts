import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Region Name',
			name: 'regionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The region name (e.g. GRA63, BHS62)',
			displayOptions,
		},
		{
			displayName: 'Network ID',
			name: 'networkId',
			type: 'string',
			default: '',
			required: true,
			description: 'The networkId parameter',
			displayOptions,
		},
		{
			displayName: 'Cidr',
			name: 'cidr',
			type: 'string',
			default: '',
			description: 'The cidr parameter',
			displayOptions,
		},
		{
			displayName: 'Dhcp',
			name: 'dhcp',
			type: 'string',
			default: '',
			description: 'The dhcp parameter',
			displayOptions,
		},
		{
			displayName: 'Ip Version',
			name: 'ipVersion',
			type: 'string',
			default: '',
			description: 'The ipVersion parameter',
			displayOptions,
		},
		{
			displayName: 'Gateway Ip',
			name: 'gatewayIp',
			type: 'string',
			default: '',
			description: 'The gatewayIp parameter',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'The name parameter',
			displayOptions,
		},
		{
			displayName: 'Allocation Pools',
			name: 'allocationPools',
			type: 'string',
			default: '',
			description: 'The allocationPools parameter',
			displayOptions,
		},
		{
			displayName: 'Dns Nameservers',
			name: 'dnsNameservers',
			type: 'string',
			default: '',
			description: 'The dnsNameservers parameter',
			displayOptions,
		},
		{
			displayName: 'Host Routes',
			name: 'hostRoutes',
			type: 'string',
			default: '',
			description: 'The hostRoutes parameter',
			displayOptions,
		},
		{
			displayName: 'Subnet ID',
			name: 'subnetId',
			type: 'string',
			default: '',
			description: 'The subnetId parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Subnet operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/network/${networkId}/subnet
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const networkId = this.getNodeParameter('networkId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('cidr', _itemIndex ?? 0)) {
		body.cidr = this.getNodeParameter('cidr', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('dhcp', _itemIndex ?? 0)) {
		body.dhcp = this.getNodeParameter('dhcp', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('ipVersion', _itemIndex ?? 0)) {
		body.ipVersion = this.getNodeParameter('ipVersion', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('gatewayIp', _itemIndex ?? 0)) {
		body.gatewayIp = this.getNodeParameter('gatewayIp', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('name', _itemIndex ?? 0)) {
		body.name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('allocationPools', _itemIndex ?? 0)) {
		body.allocationPools = this.getNodeParameter('allocationPools', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('dnsNameservers', _itemIndex ?? 0)) {
		body.dnsNameservers = this.getNodeParameter('dnsNameservers', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('hostRoutes', _itemIndex ?? 0)) {
		body.hostRoutes = this.getNodeParameter('hostRoutes', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('subnetId', _itemIndex ?? 0)) {
		body.subnetId = this.getNodeParameter('subnetId', _itemIndex ?? 0) as string;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/network/${networkId}/subnet`, body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
