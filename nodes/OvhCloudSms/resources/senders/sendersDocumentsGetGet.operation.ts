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
			displayName: 'Document ID',
			name: 'documentID',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
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
	];
}

/**
 * Executes the Get /sms/{serviceName}/senders/{sender}/documents/{documentID} operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/senders/{sender}/documents/{documentID}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const documentID = this.getNodeParameter('documentID', 0) as string;
	const sender = this.getNodeParameter('sender', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/senders/${encodeURIComponent(sender)}/documents/${encodeURIComponent(documentID)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
