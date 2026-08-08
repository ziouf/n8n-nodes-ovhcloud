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
			displayName: 'Book Key',
			name: 'bookKey',
			type: 'string',
			default: '',
			required: true,
			description: 'Identifier of the phonebook',
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
 * Executes the Get /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const bookKey = this.getNodeParameter('bookKey', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/phonebooks/${encodeURIComponent(bookKey)}/phonebookContact`,
	)) as number[];
	return this.helpers.returnJsonArray(data.map((v: number) => ({ id: v })));
}
