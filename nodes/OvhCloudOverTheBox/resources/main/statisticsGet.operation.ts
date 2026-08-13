import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OverTheBox Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your OverTheBox offer (e.g. overthebox-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getOverTheBoxServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'overthebox-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Metrics Type',
			name: 'metricsType',
			type: 'options',
			default: 'load',
			options: [
				{ name: 'Load', value: 'load' },
				{ name: 'Memory Free', value: 'memory_free' },
				{ name: 'Traffic', value: 'traffic' },
			],
			required: true,
			description: 'Type of metrics you want to retrieve',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'options',
			default: 'daily',
			options: [
				{ name: 'Daily', value: 'daily' },
				{ name: 'Hourly', value: 'hourly' },
				{ name: 'Monthly', value: 'monthly' },
				{ name: 'Weekly', value: 'weekly' },
			],
			description: 'Period (default is daily)',
			displayOptions,
		},
	];
}

/**
 * Get statistics for an OTB device.
 *
 * HTTP method: GET
 * Endpoint: /overTheBox/{serviceName}/statistics
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const metricsType = (this.getNodeParameter('metricsType', _itemIndex ?? 0, '') as string) || '';
	const period = (this.getNodeParameter('period', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = {};
	if (metricsType) qs.metricsType = metricsType;
	if (period) qs.period = period;
	const data = (await client.httpGet(
		`/overTheBox/${encodeURIComponent(serviceName)}/statistics`,
		qs,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { name: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
