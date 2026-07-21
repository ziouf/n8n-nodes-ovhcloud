import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
			description: 'Filter by country code (e.g. fr, uk, de)',
			placeholder: 'e.g. fr',
			displayOptions,
		},
		{
			displayName: 'Server Hardware Type',
			name: 'serverHardwareType',
			type: 'string',
			default: '',
			description: 'Filter by base server hardware type (e.g. gpu)',
			placeholder: 'e.g. gpu',
			displayOptions,
		},
		{
			displayName: 'Memory Type',
			name: 'memoryType',
			type: 'string',
			default: '',
			description: 'Filter by memory module name/type',
			placeholder: 'e.g. DDR4 ECC',
			displayOptions,
		},
		{
			displayName: 'Storage Type',
			name: 'storageType',
			type: 'string',
			default: '',
			description: 'Filter by storage device type',
			placeholder: 'e.g. SSD, HDD',
			displayOptions,
		},
		{
			displayName: 'GPU Name',
			name: 'gpuName',
			type: 'string',
			default: '',
			description: 'Filter by GPU name (e.g. RTX 3090)',
			placeholder: 'e.g. RTX 3090',
			displayOptions,
		},
		{
			displayName: 'Plan Code',
			name: 'planCode',
			type: 'string',
			default: '',
			description: 'Filter by plan code involved in the hardware configuration',
			placeholder: 'e.g. standard-gpu',
			displayOptions,
		},
		{
			displayName: 'Datacenters (Comma-Separated)',
			name: 'datacentersList',
			type: 'string',
			default: '',
			description: 'Filter by datacenter names, comma-separated (e.g. gra1,par2)',
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
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const qs: IDataObject = {};

	const country = (this.getNodeParameter('country', 0) as string) || undefined;
	if (country) qs.country = country;

	const serverHardwareType =
		(this.getNodeParameter('serverHardwareType', 0) as string) || undefined;
	if (serverHardwareType) qs.server = serverHardwareType;

	const memoryType = (this.getNodeParameter('memoryType', 0) as string) || undefined;
	if (memoryType) qs.memory = memoryType;

	const storageType = (this.getNodeParameter('storageType', 0) as string) || undefined;
	if (storageType) qs.storage = storageType;

	const gpuName = (this.getNodeParameter('gpuName', 0) as string) || undefined;
	if (gpuName) qs.gpu = gpuName;

	const planCode = (this.getNodeParameter('planCode', 0) as string) || undefined;
	if (planCode) qs.planCode = planCode;

	const datacentersList = (this.getNodeParameter('datacentersList', 0) as string) || undefined;
	if (datacentersList) {
		qs.datacenters = datacentersList.split(',').map((d: string) => d.trim());
	}

	const excludeDatacenters = this.getNodeParameter('excludeDatacenters', 0) as boolean | undefined;
	if (typeof excludeDatacenters === 'boolean') {
		qs.excludeDatacenters = excludeDatacenters;
	}

	const data = (await client.httpGet(
		'/dedicated/server/datacenter/availabilities',
		qs,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
