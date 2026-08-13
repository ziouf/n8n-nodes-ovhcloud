import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
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
 * Create a subscription from logs to a pre-existing LDP stream
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/log/subscription
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const kind = this.getNodeParameter('kind', _itemIndex as number) as string;
	const streamId = this.getNodeParameter('streamId', _itemIndex as number) as string;
	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/log/subscription`,
		{ kind, streamId } as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
