import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Office Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Office tenant service name (e.g. csp2-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getSaasCsp2Services', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'csp2-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Time Period',
			name: 'timePeriod',
			type: 'options',
			default: 'lastMonth',
			required: true,
			options: [
				{ name: 'Last Month', value: 'lastMonth' },
				{ name: 'Last Quarter', value: 'lastQuarter' },
				{ name: 'Last Week', value: 'lastWeek' },
				{ name: 'Last Year', value: 'lastYear' },
			],
			description: 'Time period to query for usage statistics',
			displayOptions,
		},
	];
}

/**
 * Get usage statistics of an Office tenant for a given period.
 *
 * HTTP method: GET
 * Endpoint: /saas/csp2/{serviceName}/usageStatistics
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const timePeriod = (this.getNodeParameter('timePeriod', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = { timePeriod };
	const data = (await client.httpGet(
		`/saas/csp2/${encodeURIComponent(serviceName)}/usageStatistics`,
		qs,
	)) as unknown[];
	const items = data.map((item) => item as IDataObject) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
