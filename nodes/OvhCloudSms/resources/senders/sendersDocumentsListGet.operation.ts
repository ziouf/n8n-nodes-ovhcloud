import type {
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
	];
}

/**
 * Executes the Get /sms/{serviceName}/senders/{sender}/documents operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/senders/{sender}/documents
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const sender = this.getNodeParameter('sender', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/senders/${encodeURIComponent(sender)}/documents`,
	)) as string[];
	return this.helpers.returnJsonArray(data.map((v: string) => ({ documentID: v })));
}
