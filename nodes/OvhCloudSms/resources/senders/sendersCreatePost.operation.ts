import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Sender description',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			description: 'Message seen by the moderator',
			displayOptions,
		},
		{
			displayName: 'Sender',
			name: 'sender',
			type: 'string',
			default: '',
			required: true,
			description: 'The sender (alpha or phone number)',
			displayOptions,
		},
	];
}

/**
 * Executes the Post /sms/{serviceName}/senders operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/senders
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const description = this.getNodeParameter('description', _itemIndex ?? 0) as string;
	const reason = this.getNodeParameter('reason', _itemIndex ?? 0) as string;
	const sender = this.getNodeParameter('sender', _itemIndex ?? 0) as string;
	const body: IDataObject = {};
	if (description) body['description'] = description;
	if (reason) body['reason'] = reason;
	body['sender'] = sender;
	const data = (await getClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/senders`,
		body,
	)) as string;
	return this.helpers.returnJsonArray([{ value: data }]);
}
