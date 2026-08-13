import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
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
			displayName: 'ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'Contact identifier',
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
			displayName: 'Group',
			name: 'group',
			type: 'string',
			default: '',
			description: 'Property of sms.PhonebookContact',
			displayOptions,
		},
		{
			displayName: 'Home Mobile',
			name: 'homeMobile',
			type: 'string',
			default: '',
			description: 'Property of sms.PhonebookContact',
			displayOptions,
		},
		{
			displayName: 'Home Phone',
			name: 'homePhone',
			type: 'string',
			default: '',
			description: 'Property of sms.PhonebookContact',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Property of sms.PhonebookContact',
			displayOptions,
		},
		{
			displayName: 'Surname',
			name: 'surname',
			type: 'string',
			default: '',
			description: 'Property of sms.PhonebookContact',
			displayOptions,
		},
		{
			displayName: 'Work Mobile',
			name: 'workMobile',
			type: 'string',
			default: '',
			description: 'Property of sms.PhonebookContact',
			displayOptions,
		},
		{
			displayName: 'Work Phone',
			name: 'workPhone',
			type: 'string',
			default: '',
			description: 'Property of sms.PhonebookContact',
			displayOptions,
		},
	];
}

/**
 * Executes the Put /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id} operation.
 *
 * HTTP method: PUT
 * Endpoint: /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const bookKey = this.getNodeParameter('bookKey', _itemIndex ?? 0) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as number;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const body: IDataObject = {};
	const group = this.getNodeParameter('group', _itemIndex ?? 0) as string;
	if (group) body['group'] = group;
	const homeMobile = this.getNodeParameter('homeMobile', _itemIndex ?? 0) as string;
	if (homeMobile) body['homeMobile'] = homeMobile;
	const homePhone = this.getNodeParameter('homePhone', _itemIndex ?? 0) as string;
	if (homePhone) body['homePhone'] = homePhone;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	if (name) body['name'] = name;
	const surname = this.getNodeParameter('surname', _itemIndex ?? 0) as string;
	if (surname) body['surname'] = surname;
	const workMobile = this.getNodeParameter('workMobile', _itemIndex ?? 0) as string;
	if (workMobile) body['workMobile'] = workMobile;
	const workPhone = this.getNodeParameter('workPhone', _itemIndex ?? 0) as string;
	if (workPhone) body['workPhone'] = workPhone;
	const data = (await getClient(this).httpPut(
		`/sms/${encodeURIComponent(serviceName)}/phonebooks/${encodeURIComponent(bookKey)}/phonebookContact/${id}`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
