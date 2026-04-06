import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get CDN Domain Statistics operation
 *
 * Retrieves statistics for a specific domain on a CDN Dedicated service.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/statistics
 */
export function descriptionStatisticsGetDomainStats(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the CDN Dedicated service. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: {
				mode: 'str',
				value: '',
			},
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a CDN service...',
					typeOptions: {
						searchListMethod: 'getCdnServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			description: 'The domain name',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Period',
			name: 'period',
			description: 'The statistics period',
			type: 'options',
			required: true,
			options: [
				{ name: 'Day', value: 'day' },
				{ name: 'Month', value: 'month' },
				{ name: 'Week', value: 'week' },
			],
			default: 'day',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			description: 'The statistics type',
			type: 'options',
			required: true,
			options: [
				{ name: 'Backend', value: 'backend' },
				{ name: 'CDN', value: 'cdn' },
				{ name: 'Threat', value: 'threat' },
			],
			default: 'cdn',
			displayOptions,
		},
		{
			displayName: 'Value',
			name: 'value',
			description: 'The statistics value type',
			type: 'options',
			required: true,
			options: [
				{ name: 'Bandwidth', value: 'bandwidth' },
				{ name: 'Request', value: 'request' },
			],
			default: 'bandwidth',
			displayOptions,
		},
	];
}

/**
 * Executes the Get CDN Domain Statistics operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing domain statistics
 */
export async function executeStatisticsGetDomainStats(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const domain = this.getNodeParameter('domain', 0) as string;
	const period = this.getNodeParameter('period', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;
	const value = this.getNodeParameter('value', 0) as string;

	const qs: IDataObject = { period, type, value };

	const response = (await client.httpGet(
		`/cdn/dedicated/${serviceName}/domains/${domain}/statistics`,
		qs,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
