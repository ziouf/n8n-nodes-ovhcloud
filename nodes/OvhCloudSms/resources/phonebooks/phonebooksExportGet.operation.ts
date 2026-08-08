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
		{
			displayName: 'Format',
			name: 'format',
			type: 'options',
			default: 'csv',
			options: [{ name: 'Csv', value: 'csv' }],
			required: true,
			description: 'Format of the file',
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/phonebooks/{bookKey}/export operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/phonebooks/{bookKey}/export
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const bookKey = this.getNodeParameter('bookKey', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const format = this.getNodeParameter('format', 0) as string;
	const qs: IDataObject = {};
	qs['format'] = format;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/phonebooks/${encodeURIComponent(bookKey)}/export`,
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
