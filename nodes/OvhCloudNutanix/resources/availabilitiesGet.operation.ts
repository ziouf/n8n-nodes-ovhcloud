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
			displayName: 'Erasure Coding',
			name: 'erasureCoding',
			type: 'boolean',
			default: false,
			description: 'Whether erasure coding is activated',
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
			displayName: 'Rack Awareness',
			name: 'rackAwareness',
			type: 'boolean',
			default: false,
			description: 'Whether rack awareness is activated',
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
 * Fetch availabilities for a given cluster configuration.
 *
 * HTTP method: GET
 * Endpoint: /nutanix/availabilities
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const quantity = this.getNodeParameter('quantity', 0) as number;
	const erasureCoding = this.getNodeParameter('erasureCoding', 0, false) as boolean;
	const memory = (this.getNodeParameter('memory', 0, '') as string) || '';
	const planCode = (this.getNodeParameter('planCode', 0, '') as string) || '';
	const rackAwareness = this.getNodeParameter('rackAwareness', 0, false) as boolean;
	const redundancyFactor = this.getNodeParameter('redundancyFactor', 0, 0) as number;
	const server = (this.getNodeParameter('server', 0, '') as string) || '';
	const storage = (this.getNodeParameter('storage', 0, '') as string) || '';
	const systemStorage = (this.getNodeParameter('systemStorage', 0, '') as string) || '';

	const qs: IDataObject = {};
	if (quantity !== undefined) qs.quantity = quantity;
	if (erasureCoding !== undefined) qs.erasureCoding = erasureCoding;
	if (memory) qs.memory = memory;
	if (planCode) qs.planCode = planCode;
	if (rackAwareness !== undefined) qs.rackAwareness = rackAwareness;
	if (redundancyFactor !== undefined) qs.redundancyFactor = redundancyFactor;
	if (server) qs.server = server;
	if (storage) qs.storage = storage;
	if (systemStorage) qs.systemStorage = systemStorage;
	const data = (await client.httpGet('/nutanix/availabilities', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
