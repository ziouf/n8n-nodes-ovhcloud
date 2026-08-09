import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'options',
			default: 'day',
			options: [
				{ name: 'Day', value: 'day' },
				{ name: 'Month', value: 'month' },
				{ name: 'Week', value: 'week' },
			],
			required: true,
			description: 'Period of the statistics',
			displayOptions,
		},
	];
}

/**
 * Executes the Get GetQuota operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/quota
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const period = this.getNodeParameter('period', _itemIndex) as string;

	const qs: IDataObject = {};
	if (period) qs.period = period;

	const client = new ApiClient(this);
	const data = (await client.httpGet(`/cdn/dedicated/${encodeURIComponent(serviceName)}/quota`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
