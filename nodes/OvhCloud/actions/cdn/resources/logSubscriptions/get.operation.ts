import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Get CDN Log Subscription operation
 *
 * Retrieves details of a specific log subscription for a CDN Dedicated service.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/log/subscription/{subscriptionId}
 */
export function descriptionLogSubscriptionsGet(displayOptions: IDisplayOptions): INodeProperties[] {
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
			displayName: 'Subscription ID',
			name: 'subscriptionId',
			description: 'The ID of the log subscription to retrieve',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Get CDN Log Subscription operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing subscription details
 */
export async function executeLogSubscriptionsGet(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', 0) as string;

	const response = (await client.httpGet(
		`/cdn/dedicated/${serviceName}/log/subscription/${subscriptionId}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
