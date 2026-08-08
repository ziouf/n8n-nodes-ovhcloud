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
			displayName: 'Message',
			name: 'message',
			type: 'string',
			default: '',
			required: true,
			description: 'The message to send',
			displayOptions,
		},
		{
			displayName: 'No Stop Clause',
			name: 'noStopClause',
			type: 'boolean',
			default: false,
			required: true,
			description:
				'Whether Do not display STOP clause in the message, this requires that this is not an advertising message',
			displayOptions,
		},
		{
			displayName: 'Sender Type',
			name: 'senderType',
			type: 'options',
			default: 'alpha',
			options: [
				{ name: 'Alpha', value: 'alpha' },
				{ name: 'Numeric', value: 'numeric' },
				{ name: 'Shortcode', value: 'shortcode' },
				{ name: 'Time2chat', value: 'time2chat' },
				{ name: 'Virtual', value: 'virtual' },
			],
			required: true,
			description: 'Sender type that will be used to send the message',
			displayOptions,
		},
	];
}

/**
 * Executes the Post /sms/estimate operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/estimate
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const message = this.getNodeParameter('message', 0) as string;
	const noStopClause = this.getNodeParameter('noStopClause', 0) as boolean;
	const senderType = this.getNodeParameter('senderType', 0) as string;
	const body: IDataObject = {};
	body['message'] = message;
	body['noStopClause'] = noStopClause;
	body['senderType'] = senderType;
	const data = (await new ApiClient(this).httpPost(`/sms/estimate`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
