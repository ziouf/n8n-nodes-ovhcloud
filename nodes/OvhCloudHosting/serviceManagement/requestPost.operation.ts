import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
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
			displayOptions,
		},
		{
			displayName: 'Subject',
			name: 'subject',
			type: 'string',
			default: '',
			required: true,
			description: 'The subject of the support request',
			displayOptions,
		},
		{
			displayName: 'Message',
			name: 'message',
			type: 'string',
			typeOptions: { rowCount: true },
			default: '',
			required: true,
			description: 'The message content',
			displayOptions,
		},
	];
}

/**
 * Create a support request for hosting
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/request
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const subject = this.getNodeParameter('subject', _itemIndex ?? 0) as string;
	const message = this.getNodeParameter('message', _itemIndex ?? 0) as string;
	const data = await client.httpPost(`/hosting/web/${serviceName}/request`, { subject, message });
	return this.helpers.returnJsonArray([data as import('n8n-workflow').IDataObject]);
}
