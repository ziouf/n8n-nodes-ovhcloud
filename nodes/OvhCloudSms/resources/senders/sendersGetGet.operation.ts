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
			displayName: 'Sender',
			name: 'sender',
			type: 'string',
			default: '',
			required: true,
			description: 'The sms sender',
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
		}
	];
}

/**
 * Executes the Get /sms/{serviceName}/senders/{sender} operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/senders/{sender}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const sender = this.getNodeParameter('sender', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await new ApiClient(this).httpGet(`/sms/${encodeURIComponent(serviceName)}/senders/${encodeURIComponent(sender)}`)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
