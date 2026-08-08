import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getSmsServices',
				displayName: 'Service Name',
				description: 'The internal name of your SMS offer',
				placeholder: 'sms-XXXXXX-1',
			}),
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const description = this.getNodeParameter('description', 0) as string;
	const reason = this.getNodeParameter('reason', 0) as string;
	const sender = this.getNodeParameter('sender', 0) as string;
	const body: IDataObject = {};
	if (description) body['description'] = description;
	if (reason) body['reason'] = reason;
	body['sender'] = sender;
	const data = (await new ApiClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/senders`,
		body,
	)) as string;
	return this.helpers.returnJsonArray([{ value: data }]);
}
