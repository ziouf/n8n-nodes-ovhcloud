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
			displayName: 'Sender',
			name: 'sender',
			type: 'string',
			default: '',
			required: true,
			description: 'The sms sender',
			displayOptions,
		},
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const sender = this.getNodeParameter('sender', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', 0) as string;
	if (description) body['description'] = description;
	const status = this.getNodeParameter('status', 0) as string;
	if (status) body['status'] = status;
	const data = (await new ApiClient(this).httpPut(
		`/sms/${encodeURIComponent(serviceName)}/senders/${encodeURIComponent(sender)}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
