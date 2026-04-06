import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Create CDN Log Subscription operation
 *
 * Adds a new log subscription to a CDN Dedicated service.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/log/subscription
 */
export function descriptionLogSubscriptionsCreate(
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
			displayName: 'Kind',
			name: 'kind',
			description: 'The log subscription kind',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Stream ID',
			name: 'streamId',
			description: 'The stream ID for the log subscription',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Create CDN Log Subscription operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the created subscription details
 */
export async function executeLogSubscriptionsCreate(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const kind = this.getNodeParameter('kind', 0) as string;
	const streamId = this.getNodeParameter('streamId', 0) as string;

	const response = (await client.httpPost(`/cdn/dedicated/${serviceName}/log/subscription`, {
		kind,
		streamId,
	})) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
