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
			displayName: 'Book Key',
			name: 'bookKey',
			type: 'string',
			default: '',
			required: true,
			description: 'Identifier of the phonebook',
			displayOptions,
		},
		{
			...SERVICE_NAME,
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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const bookKey = this.getNodeParameter('bookKey', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const format = this.getNodeParameter('format', _itemIndex ?? 0) as string;
	const qs: IDataObject = {};
	qs['format'] = format;
	const data = (await getClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/phonebooks/${encodeURIComponent(bookKey)}/export`,
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
