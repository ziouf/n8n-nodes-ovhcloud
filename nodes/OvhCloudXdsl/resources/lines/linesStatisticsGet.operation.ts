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
			displayName: 'Xdsl Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The name of the xDSL service (e.g. xdsl-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'xdsl-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Line Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'Number of the line',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'options',
			default: "day",
			required: true,
			options: [
				{ name: 'Day', value: 'day' },
				{ name: 'Month', value: 'month' },
				{ name: 'Week', value: 'week' },
				{ name: 'Year', value: 'year' },
			],
			description: 'Period of the statistics',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			default: "attenuation",
			required: true,
			options: [
				{ name: 'Attenuation', value: 'attenuation' },
				{ name: 'Errors Power', value: 'errorsPower' },
				{ name: 'FEC', value: 'fec' },
				{ name: 'Noise Margin', value: 'noiseMargin' },
				{ name: 'Synchronisation', value: 'synchronisation' },
			],
			description: 'Type of statistics to retrieve',
			displayOptions,
		},
	];
}

/**
 * Get the statistics of a specific DSLAM line of an xDSL service.
 *
 * HTTP method: GET
 * Endpoint: /xdsl/{serviceName}/lines/{number}/statistics
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const number = this.getNodeParameter('number', _itemIndex ?? 0) as string;
	const period = (this.getNodeParameter('period', _itemIndex ?? 0, '') as string) || '';
	const type = (this.getNodeParameter('type', _itemIndex ?? 0, '') as string) || '';

	const qs: IDataObject = {};
	if (period) qs.period = period;
	if (type) qs.type = type;

	const data = (await client.httpGet(`/xdsl/${encodeURIComponent(serviceName)}/lines/${encodeURIComponent(number)}/statistics`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
