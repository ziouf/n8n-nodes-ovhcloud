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
			displayName: 'OvhCloudConnect Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description:
				'The unique identifier of the service (e.g. 123e4567-e89b-12d3-a456-426614174000)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getOvhCloudConnectServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: '123e4567-e89b-12d3-a456-426614174000',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Interface ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'Unique identifier of the interface',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'options',
			default: '1HOUR',
			required: true,
			options: [
				{ name: '1 Day', value: '1DAY' },
				{ name: '1 Hour', value: '1HOUR' },
				{ name: '1 Month', value: '1MONTH' },
				{ name: '1 Week', value: '1WEEK' },
				{ name: '1 Year', value: '1YEAR' },
			],
			description: 'Period for which the statistics are fetched',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			default: 'cpu',
			required: true,
			options: [
				{ name: 'CPU', value: 'cpu' },
				{ name: 'Memory', value: 'memory' },
				{ name: 'Traffic', value: 'traffic' },
			],
			description: 'Type of statistic to fetch',
			displayOptions,
		},
	];
}

/**
 * Get the statistics for a specific interface of an OvhCloud Connect service.
 *
 * HTTP method: GET
 * Endpoint: /ovhCloudConnect/{serviceName}/interface/{id}/statistics
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const id = this.getNodeParameter('id', 0) as number;
	const period = (this.getNodeParameter('period', 0, '') as string) || '';
	const type = (this.getNodeParameter('type', 0, '') as string) || '';

	const qs: IDataObject = {};
	if (period) qs.period = period;
	if (type) qs.type = type;

	const data = (await client.httpGet(
		`/ovhCloudConnect/${encodeURIComponent(serviceName)}/interface/${encodeURIComponent(id)}/statistics`,
		qs,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { timestamp: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
