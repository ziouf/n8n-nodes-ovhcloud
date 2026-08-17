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
	];
}

/**
 * Executes the Delete /sms/{serviceName}/senders/{sender} operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}/senders/{sender}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const sender = this.getNodeParameter('sender', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const data = (await getClient(this).httpDelete(
		`/sms/${encodeURIComponent(serviceName)}/senders/${encodeURIComponent(sender)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
