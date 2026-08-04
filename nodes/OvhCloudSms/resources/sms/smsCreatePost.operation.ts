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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The SMS service name',
			displayOptions,
		},
		{
			displayName: 'Recipients',
			name: 'receivers',
			type: 'string',
			default: '',
			description: 'Comma-separated list of recipient phone numbers',
			displayOptions,
		},
		{
			displayName: 'Content',
			name: 'message',
			type: 'string',
			typeOptions: { rows: 2 },
			default: '',
			required: true,
			description: 'The SMS content',
			displayOptions,
		},
		{
			displayName: 'Sender',
			name: 'sender',
			type: 'string',
			default: '',
			description: 'The sender (alpha name or phone number)',
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
			displayName: 'Charset',
			name: 'charset',
			type: 'options',
			default: 'UTF-8',
			options: [{ name: 'UTF-8', value: 'UTF-8' }],
			description: 'The SMS charset',
			displayOptions,
		},
		{
			displayName: 'Coding',
			name: 'coding',
			type: 'options',
			default: '7bit',
			options: [
				{ name: '7bit', value: '7bit' },
				{ name: '8bit', value: '8bit' },
			],
			description: 'Deprecated: the coding is deduced from the message and its charset',
			displayOptions,
		},
		{
			displayName: 'Class',
			name: 'class',
			type: 'options',
			default: 'flash',
			options: [
				{ name: 'Flash', value: 'flash' },
				{ name: 'phoneDisplay', value: 'phoneDisplay' },
				{ name: 'Sim', value: 'sim' },
				{ name: 'Toolkit', value: 'toolkit' },
			],
			description: 'Deprecated: The SMS class',
			displayOptions,
		},
		{
			displayName: 'Priority',
			name: 'priority',
			type: 'options',
			default: 'high',
			options: [
				{ name: 'High', value: 'high' },
				{ name: 'Low', value: 'low' },
				{ name: 'Medium', value: 'medium' },
				{ name: 'veryLow', value: 'veryLow' },
			],
			description: 'The priority of the message',
			displayOptions,
		},
		{
			displayName: 'Differed Period',
			name: 'differedPeriod',
			type: 'number',
			default: 0,
			description: 'The time (in minutes) to wait before sending the message',
			displayOptions,
		},
		{
			displayName: 'Validity Period',
			name: 'validityPeriod',
			type: 'number',
			default: 0,
			description: 'The maximum time (in minutes) before the message is dropped',
			displayOptions,
		},
		{
			displayName: 'No Stop Clause',
			name: 'noStopClause',
			type: 'boolean',
			default: false,
			description:
				'Whether to omit the STOP clause in the message (only for non-advertising messages)',
			displayOptions,
		},
		{
			displayName: 'Sender For Response',
			name: 'senderForResponse',
			type: 'boolean',
			default: false,
			description: 'Whether to send a special SMS that the receiver can reply to (SMS response)',
			displayOptions,
		},
	];
}

/**
 * Executes the Send SMS operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/jobs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const receivers = this.getNodeParameter('receivers', 0) as string;
	const message = this.getNodeParameter('message', 0) as string;
	const sender = this.getNodeParameter('sender', 0) as string;
	const tag = this.getNodeParameter('tag', 0) as string;
	const charset = this.getNodeParameter('charset', 0) as string;
	const coding = this.getNodeParameter('coding', 0) as string;
	const smsClass = this.getNodeParameter('class', 0) as string;
	const priority = this.getNodeParameter('priority', 0) as string;
	const differedPeriod = this.getNodeParameter('differedPeriod', 0) as number;
	const validityPeriod = this.getNodeParameter('validityPeriod', 0) as number;
	const noStopClause = this.getNodeParameter('noStopClause', 0) as boolean;
	const senderForResponse = this.getNodeParameter('senderForResponse', 0) as boolean;

	const body: IDataObject = {
		message,
	};
	if (receivers) {
		body.receivers = receivers.split(',').map((r: string) => r.trim());
	}
	if (sender) body.sender = sender;
	if (tag) body.tag = tag;
	if (charset) body.charset = charset;
	if (coding) body.coding = coding;
	if (smsClass) body.class = smsClass;
	if (priority) body.priority = priority;
	if (differedPeriod) body.differedPeriod = differedPeriod;
	if (validityPeriod) body.validityPeriod = validityPeriod;
	if (noStopClause) body.noStopClause = noStopClause;
	if (senderForResponse) body.senderForResponse = senderForResponse;

	const data = (await client.httpPost(
		`/sms/${encodeURIComponent(serviceName)}/jobs`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
