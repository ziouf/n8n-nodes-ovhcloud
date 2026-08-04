import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
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
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
		{
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			required: true,
			description: 'Log kind name to subscribe to',
			displayOptions,
		},
		{
			displayName: 'Stream ID',
			name: 'streamId',
			type: 'string',
			default: '',
			required: true,
			description: 'Customer log stream ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Post CreateLogSubscription operation.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/log/subscription
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const kind = this.getNodeParameter('kind', itemIndex) as string;
	const streamId = this.getNodeParameter('streamId', itemIndex) as string;

	const body: IDataObject = {};
	body.kind = kind;
	body.streamId = streamId;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/cdn/dedicated/${encodeURIComponent(serviceName)}/log/subscription`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
