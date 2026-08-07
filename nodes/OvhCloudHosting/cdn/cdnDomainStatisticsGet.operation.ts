import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain name',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			type: 'options',
			default: 'day',
			options: [
				{ name: 'Day', value: 'day' },
				{ name: 'Week', value: 'week' },
				{ name: 'Month', value: 'month' },
				{ name: 'Year', value: 'year' },
			],
			description: 'Period (default is day)',
			displayOptions,
		},
	];
}

/**
 * Get CDN statistics for a domain
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/cdn/domain/{domain}/statistics
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const domain = this.getNodeParameter('domain', itemIndex) as string;
	const period = this.getNodeParameter('period', itemIndex, 'day') as string;
	const qs: IDataObject = {};
	if (period) qs.period = period;
	const data = (await client.httpGet(
		`/hosting/web/${serviceName}/cdn/domain/${domain}/statistics`,
		qs,
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
