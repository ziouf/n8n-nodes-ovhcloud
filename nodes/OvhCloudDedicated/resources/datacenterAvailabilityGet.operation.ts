import type {
	IExecuteFunctions,
	IDataObject,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/** Lists datacenter availabilities for dedicated server ordering. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Datacenters',
			name: 'datacenters',
			type: 'string',
			default: '',
			description: 'Comma-separated list of specific datacenter names to query (e.g. gra1,par2)',
			placeholder: 'e.g. gra1,par2',
			displayOptions,
		},
		{
			displayName: 'Exclude Datacenters',
			name: 'excludeDatacenters',
			type: 'boolean',
			default: false,
			description: 'Whether to exclude datacenters from results (returning only non-matching ones)',
			displayOptions,
		},
		{
			displayName: 'GPU Type',
			name: 'gpu',
			type: 'string',
			default: '',
			description: 'Filter by GPU hardware type (e.g. NVIDIA A100)',
			placeholder: 'e.g. NVIDIA A100',
			displayOptions,
		},
		{
			displayName: 'Memory in GB',
			name: 'memoryInGB',
			type: 'number',
			default: 0,
			description: 'Filter by memory size in gigabytes (e.g. 64)',
			placeholder: 'e.g. 64',
			displayOptions,
		},
		{
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			description: 'Filter by plan code to check availability for (e.g. standard-gpu)',
			placeholder: 'e.g. standard-gpu',
			displayOptions,
		},
		{
			displayName: 'Server Model',
			name: 'serverModel',
			type: 'string',
			default: '',
			description: 'Filter by base server model name (e.g. gpu)',
			placeholder: 'e.g. gpu',
			displayOptions,
		},
		{
			displayName: 'Storage Type',
			name: 'storage',
			type: 'string',
			default: '',
			description: 'Filter by storage hardware type (e.g. NVMe SSD)',
			placeholder: 'e.g. NVMe SSD',
			displayOptions,
		},
		{
			displayName: 'System Storage Type',
			name: 'systemStorage',
			type: 'string',
			default: '',
			description: 'Filter by system storage type (e.g. HDD)',
			placeholder: 'e.g. HDD',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const qs: IDataObject = {};

	const datacenters = (this.getNodeParameter('datacenters', _itemIndex ?? 0) as string) || undefined;
	if (datacenters && datacenters.trim() !== '') {
		qs.datacenters = datacenters.split(',').map((d: string) => d.trim());
	}

	const excludeDatacenters = this.getNodeParameter('excludeDatacenters', _itemIndex ?? 0) as boolean;
	if (excludeDatacenters === true) {
		qs.excludeDatacenters = true;
	}
	const gpu = (this.getNodeParameter('gpu', _itemIndex ?? 0) as string) || undefined;
	if (gpu) qs.gpu = gpu;

	const memoryInGB = this.getNodeParameter('memoryInGB', _itemIndex ?? 0) as number | undefined;
	if (typeof memoryInGB === 'number' && memoryInGB > 0) {
		qs.memoryInGB = memoryInGB;
	}

	const planCode = (this.getNodeParameter('planCode', _itemIndex ?? 0) as string) || undefined;
	if (planCode) qs.planCode = planCode;

	const serverModel = (this.getNodeParameter('serverModel', _itemIndex ?? 0) as string) || undefined;
	if (serverModel) qs.server = serverModel;

	const storage = (this.getNodeParameter('storage', _itemIndex ?? 0) as string) || undefined;
	if (storage) qs.storage = storage;

	const systemStorage = (this.getNodeParameter('systemStorage', _itemIndex ?? 0) as string) || undefined;
	if (systemStorage) qs.systemStorage = systemStorage;

	const data = (await client.httpGet(
		'/dedicated/server/datacenter/availabilities',
		qs,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
