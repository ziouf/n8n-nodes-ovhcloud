import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get CDN Quota operation
 *
 * Retrieves quota information for a CDN Dedicated service.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/quota
 */
export function descriptionStatisticsGetQuota(displayOptions: IDisplayOptions): INodeProperties[] {
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
			displayName: 'Period',
			name: 'period',
			description: 'The quota period',
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
	];
}

/**
 * Executes the Get CDN Quota operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing quota information
 */
export async function executeStatisticsGetQuota(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const period = this.getNodeParameter('period', 0) as string;

	const qs: IDataObject = { period };

	const response = (await client.httpGet(`/cdn/dedicated/${serviceName}/quota`, qs)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
