import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'The sms user login',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your SMS offer',
			displayOptions,
		},
		{
			displayName: 'Charset',
			name: 'charset',
			type: 'string',
			default: '',
			description: 'The sms coding (allowed values: UTF-8)',
			displayOptions,
		},
		{
			displayName: 'Class',
			name: 'class',
			type: 'string',
			default: '',
			description: 'Deprecated: The sms class (allowed values: flash, phoneDisplay, sim, toolkit)',
			displayOptions,
		},
		{
			displayName: 'Coding',
			name: 'coding',
			type: 'string',
			default: '',
			description: 'Deprecated: the coding is deduced from the message and its charset (allowed values: 7bit, 8bit)',
			displayOptions,
		},
		{
			displayName: 'Differed Period',
			name: 'differedPeriod',
			type: 'number',
			default: 0,
			description: 'The time -in minute(s)- to wait before sending the message',
			displayOptions,
		},
		{
			displayName: 'Message',
			name: 'message',
			type: 'string',
			default: '',
			required: true,
			description: 'The sms message',
			displayOptions,
		},
		{
			displayName: 'No Stop Clause',
			name: 'noStopClause',
			type: 'boolean',
			default: false,
			description: 'Whether Do not display STOP clause in the message, this requires that this is not an advertising message',
			displayOptions,
		},
		{
			displayName: 'Priority',
			name: 'priority',
			type: 'string',
			default: '',
			description: 'The priority of the message (allowed values: high, low, medium, veryLow)',
			displayOptions,
		},
		{
			displayName: 'Receivers',
			name: 'receivers',
			type: 'string',
			default: '',
			description: 'The receivers list (comma-separated list)',
			displayOptions,
		},
		{
			displayName: 'Receivers Document URL',
			name: 'receiversDocumentUrl',
			type: 'string',
			default: '',
			description: 'The receivers document URL link in csv format',
			displayOptions,
		},
		{
			displayName: 'Receivers Slot ID',
			name: 'receiversSlotId',
			type: 'string',
			default: '',
			description: 'The receivers document slot ID',
			displayOptions,
		},
		{
			displayName: 'Sender',
			name: 'sender',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Sender For Response',
			name: 'senderForResponse',
			type: 'boolean',
			default: false,
			description: 'Whether Set the flag to send a special sms which can be reply by the receiver (smsResponse)',
			displayOptions,
		},
		{
			displayName: 'Tag',
			name: 'tag',
			type: 'string',
			default: '',
			description: 'The identifier group tag',
			displayOptions,
		},
		{
			displayName: 'Validity Period',
			name: 'validityPeriod',
			type: 'number',
			default: 0,
			description: 'The maximum time -in minute(s)- before the message is dropped',
			displayOptions,
		}
	];
}

/**
 * Executes the Post /sms/{serviceName}/users/{login}/jobs operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/users/{login}/jobs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const login = this.getNodeParameter('login', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const charset = this.getNodeParameter('charset', 0) as string;
	const classValue = this.getNodeParameter('class', 0) as string;
	const coding = this.getNodeParameter('coding', 0) as string;
	const differedPeriod = this.getNodeParameter('differedPeriod', 0) as number;
	const message = this.getNodeParameter('message', 0) as string;
	const noStopClause = this.getNodeParameter('noStopClause', 0) as boolean;
	const priority = this.getNodeParameter('priority', 0) as string;
	const receivers = this.getNodeParameter('receivers', 0) as string;
	const receiversDocumentUrl = this.getNodeParameter('receiversDocumentUrl', 0) as string;
	const receiversSlotId = this.getNodeParameter('receiversSlotId', 0) as string;
	const sender = this.getNodeParameter('sender', 0) as string;
	const senderForResponse = this.getNodeParameter('senderForResponse', 0) as boolean;
	const tag = this.getNodeParameter('tag', 0) as string;
	const validityPeriod = this.getNodeParameter('validityPeriod', 0) as number;
	const body: IDataObject = {};
	if (charset) body['charset'] = charset;
	if (classValue) body['class'] = classValue;
	if (coding) body['coding'] = coding;
	if (differedPeriod) body['differedPeriod'] = differedPeriod;
	body['message'] = message;
	if (noStopClause) body['noStopClause'] = noStopClause;
	if (priority) body['priority'] = priority;
	if (receivers) body['receivers'] = (receivers as string).split(',').map((r: string) => r.trim());
	if (receiversDocumentUrl) body['receiversDocumentUrl'] = receiversDocumentUrl;
	if (receiversSlotId) body['receiversSlotId'] = receiversSlotId;
	if (sender) body['sender'] = sender;
	if (senderForResponse) body['senderForResponse'] = senderForResponse;
	if (tag) body['tag'] = tag;
	if (validityPeriod) body['validityPeriod'] = validityPeriod;
	const data = (await new ApiClient(this).httpPost(`/sms/${encodeURIComponent(serviceName)}/users/${encodeURIComponent(login)}/jobs`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
