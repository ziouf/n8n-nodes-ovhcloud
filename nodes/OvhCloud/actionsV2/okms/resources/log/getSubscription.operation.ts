import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific OKMS log subscription.
 *
 * HTTP method: GET
 * Endpoint: /v2/okms/resource/{okmsId}/log/subscription/{subscriptionId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OKMS ID',
			name: 'okmsId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the OKMS resource',
			displayOptions,
		},
		{
			displayName: 'Subscription ID',
			name: 'subscriptionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the log subscription',
			displayOptions,
		},
	];
}

/**
 * Executes the Get OKMS Log Subscription operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const okmsId = this.getNodeParameter('okmsId', 0) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', 0) as string;
	const data = (await client.httpGet(`/v2/okms/resource/${okmsId}/log/subscription/${subscriptionId}`)) as IDataObject;
	return [{ json: data }];
}
