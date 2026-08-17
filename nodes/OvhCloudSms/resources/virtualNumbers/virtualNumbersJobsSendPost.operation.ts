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
			displayName: 'Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'The virtual number',
			displayOptions,
		},
		{
			...SERVICE_NAME,
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
			description:
				'Deprecated: the coding is deduced from the message and its charset (allowed values: 7bit, 8bit)',
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
		},
	];
}

/**
 * Executes the Post /sms/{serviceName}/virtualNumbers/{number}/jobs operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/virtualNumbers/{number}/jobs
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const number = this.getNodeParameter('number', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const charset = this.getNodeParameter('charset', _itemIndex ?? 0) as string;
	const classValue = this.getNodeParameter('class', _itemIndex ?? 0) as string;
	const coding = this.getNodeParameter('coding', _itemIndex ?? 0) as string;
	const differedPeriod = this.getNodeParameter('differedPeriod', _itemIndex ?? 0) as number;
	const message = this.getNodeParameter('message', _itemIndex ?? 0) as string;
	const priority = this.getNodeParameter('priority', _itemIndex ?? 0) as string;
	const receivers = this.getNodeParameter('receivers', _itemIndex ?? 0) as string;
	const receiversDocumentUrl = this.getNodeParameter('receiversDocumentUrl', _itemIndex ?? 0) as string;
	const receiversSlotId = this.getNodeParameter('receiversSlotId', _itemIndex ?? 0) as string;
	const tag = this.getNodeParameter('tag', _itemIndex ?? 0) as string;
	const validityPeriod = this.getNodeParameter('validityPeriod', _itemIndex ?? 0) as number;
	const body: IDataObject = {};
	if (charset) body['charset'] = charset;
	if (classValue) body['class'] = classValue;
	if (coding) body['coding'] = coding;
	if (differedPeriod) body['differedPeriod'] = differedPeriod;
	body['message'] = message;
	if (priority) body['priority'] = priority;
	if (receivers) body['receivers'] = (receivers as string).split(',').map((r: string) => r.trim());
	if (receiversDocumentUrl) body['receiversDocumentUrl'] = receiversDocumentUrl;
	if (receiversSlotId) body['receiversSlotId'] = receiversSlotId;
	if (tag) body['tag'] = tag;
	if (validityPeriod) body['validityPeriod'] = validityPeriod;
	const data = (await getClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/virtualNumbers/${encodeURIComponent(number)}/jobs`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
