import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get Availabilities operation for Dedicated Cluster
 *
 * Fetches availabilities for Dedicated Cluster services:
 * - HTTP GET request to `/dedicated/cluster/availabilities` endpoint
 * - Quantity parameter is required
 * - Memory, planCode, server, storage, and systemStorage parameters are optional
 * - Returns availability information
 */
export function descriptionDedicatedClusterAvailabilities(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Quantity',
			name: 'quantity',
			type: 'number',
			default: 1,
			required: true,
			description: 'The quantity of clusters to check availability for',
			displayOptions,
		},
		{
			displayName: 'Memory',
			name: 'memory',
			type: 'number',
			default: undefined,
			description: 'Filter by memory size in GB',
			displayOptions,
		},
		{
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			description: 'Filter by plan code',
			displayOptions,
		},
		{
			displayName: 'Server',
			name: 'server',
			type: 'string',
			default: '',
			description: 'Filter by server name',
			displayOptions,
		},
		{
			displayName: 'Storage',
			name: 'storage',
			type: 'number',
			default: undefined,
			description: 'Filter by storage size in GB',
			displayOptions,
		},
		{
			displayName: 'System Storage',
			name: 'systemStorage',
			type: 'number',
			default: undefined,
			description: 'Filter by system storage size in GB',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Availabilities operation for Dedicated Cluster.
 *
 * Fetches availabilities for Dedicated Cluster services.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/cluster/availabilities
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing availability information
 */
export async function executeDedicatedClusterAvailabilities(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const quantity = this.getNodeParameter('quantity', 0) as number;
	const memory = this.getNodeParameter('memory', 0, undefined) as number | undefined;
	const planCode = this.getNodeParameter('planCode', 0, '') as string;
	const server = this.getNodeParameter('server', 0, '') as string;
	const storage = this.getNodeParameter('storage', 0, undefined) as number | undefined;
	const systemStorage = this.getNodeParameter('systemStorage', 0, undefined) as number | undefined;

	const qs: IDataObject = { quantity };

	if (memory !== undefined) {
		qs.memory = memory;
	}
	if (planCode !== '') {
		qs.planCode = planCode;
	}
	if (server !== '') {
		qs.server = server;
	}
	if (storage !== undefined) {
		qs.storage = storage;
	}
	if (systemStorage !== undefined) {
		qs.systemStorage = systemStorage;
	}

	const data = (await client.httpGet('/dedicated/cluster/availabilities', qs)) as IDataObject[];

	return this.helpers.returnJsonArray(data);
}
