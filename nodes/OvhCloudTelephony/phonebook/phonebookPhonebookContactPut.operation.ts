import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Billing Account',
			name: 'billingAccount',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of your billingAccount',
			displayOptions,
		},
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
			type: 'string',
			default: '',
			required: true,
			description: 'Contact identifier',
			displayOptions,
		},
		{
			displayName: 'Group',
			name: 'group',
			type: 'string',
			default: '',
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
			description: 'Contact name',
			displayOptions,
		},
		{
			displayName: 'Surname',
			name: 'surname',
			type: 'string',
			default: '',
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
 * Executes the PhonebookPhonebookContactPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const bookKey = this.getNodeParameter('bookKey', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const group = this.getNodeParameter('group', _itemIndex) as string;
	const homeMobile = this.getNodeParameter('homeMobile', _itemIndex) as string;
	const homePhone = this.getNodeParameter('homePhone', _itemIndex) as string;
	const name = this.getNodeParameter('name', _itemIndex) as string;
	const surname = this.getNodeParameter('surname', _itemIndex) as string;
	const workMobile = this.getNodeParameter('workMobile', _itemIndex) as string;
	const workPhone = this.getNodeParameter('workPhone', _itemIndex) as string;

	const body: IDataObject = {
		group: group,
		homeMobile: homeMobile,
		homePhone: homePhone,
		name: name,
		surname: surname,
		workMobile: workMobile,
		workPhone: workPhone,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/phonebook' + '/' + encodeURIComponent(bookKey) + '/phonebookContact' + '/' + encodeURIComponent(id), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
