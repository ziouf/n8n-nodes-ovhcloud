import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Quantity',
			name: 'quantity',
			type: 'number',
			default: 1,
			required: true,
			description: 'Node quantity',
			displayOptions,
		},
		{
			displayName: 'Datacenters',
			name: 'datacenters',
			type: 'string',
			default: '',
			description: 'The names of datacenters separated by commas',
			displayOptions,
		},
		{
			displayName: 'Deployment Type',
			name: 'deploymentType',
			type: 'string',
			default: '',
			description: 'Filter on deployment type (e.g. NodeAwareness)',
			displayOptions,
		},
		{
			displayName: 'Erasure Coding',
			name: 'erasureCoding',
			type: 'boolean',
			default: false,
			description: 'Whether erasure coding is activated',
			displayOptions,
		},
		{
			displayName: 'Exclude Datacenters',
			name: 'excludeDatacenters',
			type: 'boolean',
			default: false,
			description: 'Whether all datacenters are returned except those in the datacenters parameter',
			displayOptions,
		},
		{
			displayName: 'Exclude Regions',
			name: 'excludeRegions',
			type: 'boolean',
			default: false,
			description: 'Whether all regions are returned except those in the regions parameter',
			displayOptions,
		},
		{
			displayName: 'Memory',
			name: 'memory',
			type: 'string',
			default: '',
			description: 'The name of the memory hardware part',
			displayOptions,
		},
		{
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			description: 'The plan code in which the hardware is involved',
			displayOptions,
		},
		{
			displayName: 'Redundancy Factor',
			name: 'redundancyFactor',
			type: 'number',
			default: 0,
			description: 'Filter on redundancy factor (2 or 3)',
			displayOptions,
		},
		{
			displayName: 'Regions',
			name: 'regions',
			type: 'string',
			default: '',
			description: 'The names of regions separated by commas',
			displayOptions,
		},
		{
			displayName: 'Server',
			name: 'server',
			type: 'string',
			default: '',
			description: 'The name of the base hardware',
			displayOptions,
		},
		{
			displayName: 'Storage',
			name: 'storage',
			type: 'string',
			default: '',
			description: 'The name of the storage hardware part',
			displayOptions,
		},
		{
			displayName: 'System Storage',
			name: 'systemStorage',
			type: 'string',
			default: '',
			description: 'The name of the system storage hardware part',
			displayOptions,
		},
	];
}

/**
 * List raw availability for Nutanix clusters.
 *
 * HTTP method: GET
 * Endpoint: /nutanix/availabilities/raw
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const quantity = this.getNodeParameter('quantity', 0) as number;
	const datacenters = (this.getNodeParameter('datacenters', 0, '') as string) || '';
	const deploymentType = (this.getNodeParameter('deploymentType', 0, '') as string) || '';
	const erasureCoding = this.getNodeParameter('erasureCoding', 0, false) as boolean;
	const excludeDatacenters = this.getNodeParameter('excludeDatacenters', 0, false) as boolean;
	const excludeRegions = this.getNodeParameter('excludeRegions', 0, false) as boolean;
	const memory = (this.getNodeParameter('memory', 0, '') as string) || '';
	const planCode = (this.getNodeParameter('planCode', 0, '') as string) || '';
	const redundancyFactor = this.getNodeParameter('redundancyFactor', 0, 0) as number;
	const regions = (this.getNodeParameter('regions', 0, '') as string) || '';
	const server = (this.getNodeParameter('server', 0, '') as string) || '';
	const storage = (this.getNodeParameter('storage', 0, '') as string) || '';
	const systemStorage = (this.getNodeParameter('systemStorage', 0, '') as string) || '';

	const qs: IDataObject = {};
	if (quantity !== undefined) qs.quantity = quantity;
	if (datacenters) qs.datacenters = datacenters;
	if (deploymentType) qs.deploymentType = deploymentType;
	if (erasureCoding !== undefined) qs.erasureCoding = erasureCoding;
	if (excludeDatacenters !== undefined) qs.excludeDatacenters = excludeDatacenters;
	if (excludeRegions !== undefined) qs.excludeRegions = excludeRegions;
	if (memory) qs.memory = memory;
	if (planCode) qs.planCode = planCode;
	if (redundancyFactor !== undefined) qs.redundancyFactor = redundancyFactor;
	if (regions) qs.regions = regions;
	if (server) qs.server = server;
	if (storage) qs.storage = storage;
	if (systemStorage) qs.systemStorage = systemStorage;
	const data = (await client.httpGet('/nutanix/availabilities/raw', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
