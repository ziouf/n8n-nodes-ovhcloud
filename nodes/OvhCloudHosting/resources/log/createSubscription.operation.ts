/**
 * @brief Create Log Subscription operation for private database
 *
 * HTTP POST request to `/hosting/privateDatabase/{serviceName}/log/subscription` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
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
			description: 'The name of the private database hosting service',
			displayOptions,
		},
		{
			displayName: 'Subscription Name',
			name: 'subscriptionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the subscription',
			displayOptions,
		},
		{
			displayName: 'Stream Name',
			name: 'streamName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the stream',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const subscriptionName = this.getNodeParameter('subscriptionName', 0) as string;
	const streamName = this.getNodeParameter('streamName', 0) as string;
	const data = (await client.httpPost(
		`/hosting/privateDatabase/${serviceName}/log/subscription`,
		{ body: { subscriptionName, streamName } },
	)) as IDataObject;
	return [{ json: data }];
}
