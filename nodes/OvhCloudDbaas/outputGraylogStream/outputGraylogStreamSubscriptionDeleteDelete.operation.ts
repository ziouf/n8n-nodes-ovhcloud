import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
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
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Stream ID',
			name: 'streamId',
			type: 'string',
			default: '',
			required: true,
			description: 'The streamId identifier',
			displayOptions,
		},
		{
			displayName: 'Subscription ID',
			name: 'subscriptionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The subscriptionId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the DELETE outputGraylogStreamSubscriptionDeleteDelete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/subscription/{subscriptionId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const streamId = this.getNodeParameter('streamId', _itemIndex) as string;
	const subscriptionId = this.getNodeParameter('subscriptionId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete(`/dbaas/logs/${encodeURIComponent(serviceName)}/output/graylog/stream/${encodeURIComponent(streamId)}/subscription/${encodeURIComponent(subscriptionId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
