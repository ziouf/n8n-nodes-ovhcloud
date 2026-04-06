import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Delete CDN Log Subscription operation
 *
 * Removes a log subscription from a CDN Dedicated service.
 *
 * HTTP method: DELETE
 * Endpoint: /cdn/dedicated/{serviceName}/log/subscription/{subscriptionId}
 */
export function descriptionLogSubscriptionsDelete(
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
			displayName: 'Subscription ID',
			name: 'subscriptionId',
			description: 'The ID of the log subscription to delete',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete CDN Log Subscription operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function executeLogSubscriptionsDelete(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', 0) as string;

	const response = (await client.httpDelete(
		`/cdn/dedicated/${serviceName}/log/subscription/${subscriptionId}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
