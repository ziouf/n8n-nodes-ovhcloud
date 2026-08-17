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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Property of sms.Phonebook',
			displayOptions,
		},
	];
}

/**
 * Executes the Put /sms/{serviceName}/phonebooks/{bookKey} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/phonebooks/{bookKey}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const bookKey = this.getNodeParameter('bookKey', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const body: IDataObject = {};
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	if (name) body['name'] = name;
	const data = (await getClient(this).httpPut(
		`/sms/${encodeURIComponent(serviceName)}/phonebooks/${encodeURIComponent(bookKey)}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
