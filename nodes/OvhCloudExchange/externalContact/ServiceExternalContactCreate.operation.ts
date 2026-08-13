import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange service',
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Contact display name',
		},
		{
			displayName: 'External Email Address',
			name: 'externalEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'Contact email address',
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'Contact first name',
		},
		{
			displayName: 'Hidden From G A L',
			name: 'hiddenFromGAL',
			type: 'string',
			default: '',
			description: 'Hide the contact in Global Address List',
		},
		{
			displayName: 'Initials',
			name: 'initials',
			type: 'string',
			default: '',
			description: 'Contact initials',
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'Contact last name',
		},
		{
			displayName: 'Organization2010',
			name: 'organization2010',
			type: 'string',
			default: '',
			description: 'Indicates to which organization this newly created external contact will belongs (Exchange 2010 only)',
		},
	];
}

/**
 * create new external contact
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/externalContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const displayName = this.getNodeParameter('displayName', _itemIndex ?? 0) as string;
	const externalEmailAddress = this.getNodeParameter('externalEmailAddress', _itemIndex ?? 0) as string;
	const firstName = this.getNodeParameter('firstName', _itemIndex ?? 0) as string;
	const hiddenFromGAL = this.getNodeParameter('hiddenFromGAL', _itemIndex ?? 0) as string;
	const initials = this.getNodeParameter('initials', _itemIndex ?? 0) as string;
	const lastName = this.getNodeParameter('lastName', _itemIndex ?? 0) as string;
	const organization2010 = this.getNodeParameter('organization2010', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    displayName: displayName,
    externalEmailAddress: externalEmailAddress,
    firstName: firstName,
    hiddenFromGAL: hiddenFromGAL,
    initials: initials,
    lastName: lastName,
    organization2010: organization2010
	};

	const client = getClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/externalContact", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
