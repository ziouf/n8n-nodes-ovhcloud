import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
			displayName: 'Line Number',
			name: 'lineNumber',
			type: 'string',
			default: '',
			required: true,
			description: 'Number of the line to diagnose',
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
			description: 'Period of the diagnostic',
			displayOptions,
		},
	];
}

/**
 * Run and retrieve the advanced diagnostic of a DSLAM line.
 *
 * HTTP method: POST
 * Endpoint: /xdsl/{serviceName}/lines/{number}/diagnostic/run
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const number = this.getNodeParameter('number', _itemIndex ?? 0) as string;
	const lineNumber = (this.getNodeParameter('lineNumber', _itemIndex ?? 0, '') as string) || '';
	const period = (this.getNodeParameter('period', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (lineNumber) body.lineNumber = lineNumber;
	if (period) body.period = period;

	const data = (await client.httpPost(`/xdsl/${encodeURIComponent(serviceName)}/lines/${encodeURIComponent(number)}/diagnostic/run`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
