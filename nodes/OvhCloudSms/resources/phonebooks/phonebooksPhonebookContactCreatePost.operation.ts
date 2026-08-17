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
			displayName: 'Group',
			name: 'group',
			type: 'string',
			default: '',
			required: true,
			description: 'Group name of the phonebook',
			displayOptions,
		},
		{
			displayName: 'Home Mobile',
			name: 'homeMobile',
			type: 'string',
			default: '',
			description: 'Home mobile phone number of the contact',
			displayOptions,
		},
		{
			displayName: 'Home Phone',
			name: 'homePhone',
			type: 'string',
			default: '',
			description: 'Home landline phone number of the contact',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the contact',
			displayOptions,
		},
		{
			displayName: 'Surname',
			name: 'surname',
			type: 'string',
			default: '',
			required: true,
			description: 'Contact surname',
			displayOptions,
		},
		{
			displayName: 'Work Mobile',
			name: 'workMobile',
			type: 'string',
			default: '',
			description: 'Mobile phone office number of the contact',
			displayOptions,
		},
		{
			displayName: 'Work Phone',
			name: 'workPhone',
			type: 'string',
			default: '',
			description: 'Landline phone office number of the contact',
			displayOptions,
		},
	];
}

/**
 * Executes the Post /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const bookKey = this.getNodeParameter('bookKey', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const group = this.getNodeParameter('group', _itemIndex ?? 0) as string;
	const homeMobile = this.getNodeParameter('homeMobile', _itemIndex ?? 0) as string;
	const homePhone = this.getNodeParameter('homePhone', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const surname = this.getNodeParameter('surname', _itemIndex ?? 0) as string;
	const workMobile = this.getNodeParameter('workMobile', _itemIndex ?? 0) as string;
	const workPhone = this.getNodeParameter('workPhone', _itemIndex ?? 0) as string;
	const body: IDataObject = {};
	body['group'] = group;
	if (homeMobile) body['homeMobile'] = homeMobile;
	if (homePhone) body['homePhone'] = homePhone;
	body['name'] = name;
	body['surname'] = surname;
	if (workMobile) body['workMobile'] = workMobile;
	if (workPhone) body['workPhone'] = workPhone;
	const data = (await getClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/phonebooks/${encodeURIComponent(bookKey)}/phonebookContact`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
