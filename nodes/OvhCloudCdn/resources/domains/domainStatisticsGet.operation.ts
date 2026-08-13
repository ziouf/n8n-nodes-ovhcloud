import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain of this object',
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
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			default: 'backend',
			options: [
				{ name: 'Backend', value: 'backend' },
				{ name: 'Cdn', value: 'cdn' },
				{ name: 'Threat', value: 'threat' },
			],
			required: true,
			description: 'Type of statistics related to cache',
			displayOptions,
		},
		{
			displayName: 'Value',
			name: 'value',
			type: 'options',
			default: 'bandwidth',
			options: [
				{ name: 'Bandwidth', value: 'bandwidth' },
				{ name: 'Request', value: 'request' },
			],
			required: true,
			description: 'Value bandwidth or request',
			displayOptions,
		},
	];
}

/**
 * Executes the Get GetDomainStatistics operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/statistics
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const period = this.getNodeParameter('period', _itemIndex) as string;
	const type = this.getNodeParameter('type', _itemIndex) as string;
	const value = this.getNodeParameter('value', _itemIndex) as string;

	const qs: IDataObject = {};
	if (period) qs.period = period;
	if (type) qs.type = type;
	if (value) qs.value = value;

	const client = getClient(this);
	const data = (await client.httpGet(`/cdn/dedicated/${encodeURIComponent(serviceName)}/domains/${encodeURIComponent(domain)}/statistics`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
