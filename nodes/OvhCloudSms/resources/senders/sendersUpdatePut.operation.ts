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
			displayName: 'Sender',
			name: 'sender',
			type: 'string',
			default: '',
			required: true,
			description: 'The sms sender',
			displayOptions,
		},
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Property of sms.Sender',
			displayOptions,
		},
		{
			displayName: 'Status',
			name: 'status',
			type: 'string',
			default: '',
			description:
				'Property of sms.Sender (allowed values: disable, enable, refused, waitingValidation)',
			displayOptions,
		},
	];
}

/**
 * Executes the Put /sms/{serviceName}/senders/{sender} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/senders/{sender}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const sender = this.getNodeParameter('sender', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex ?? 0) as string;
	if (description) body['description'] = description;
	const status = this.getNodeParameter('status', _itemIndex ?? 0) as string;
	if (status) body['status'] = status;
	const data = (await getClient(this).httpPut(
		`/sms/${encodeURIComponent(serviceName)}/senders/${encodeURIComponent(sender)}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
