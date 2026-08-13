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
			displayName: 'City',
			name: 'city',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Company',
			name: 'company',
			type: 'string',
			default: '',
			description: 'Company name',
		},
		{
			displayName: 'Country Code',
			name: 'countryCode',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Email domain',
		},
		{
			displayName: 'Exchange Guid',
			name: 'exchangeGuid',
			type: 'string',
			default: '',
			required: true,
			description: 'Remote exchangeGuid',
		},
		{
			displayName: 'Fax',
			name: 'fax',
			type: 'string',
			default: '',
			description: 'Fax number',
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Hidden From G A L',
			name: 'hiddenFromGAL',
			type: 'string',
			default: '',
			description: 'Hide the remote mailbox in Global Address List',
		},
		{
			displayName: 'Initials',
			name: 'initials',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Job Department',
			name: 'jobDepartment',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Job Title',
			name: 'jobTitle',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Mobile',
			name: 'mobile',
			type: 'string',
			default: '',
			description: 'Mobile phone number',
		},
		{
			displayName: 'Office',
			name: 'office',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
		{
			displayName: 'Phone',
			name: 'phone',
			type: 'string',
			default: '',
			description: 'Phone Number',
		},
		{
			displayName: 'Postal Code',
			name: 'postalCode',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Remote Routing Address',
			name: 'remoteRoutingAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'Address of associated mailbox',
		},
		{
			displayName: 'Spam And Virus Configuration',
			name: 'spamAndVirusConfiguration',
			type: 'string',
			default: '',
			description: 'Antispam and Antivirus configuration',
		},
		{
			displayName: 'Street Address',
			name: 'streetAddress',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'Type of mailbox',
		},
	];
}

/**
 * Create new remote mailbox in exchange server
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/remoteMailbox
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const city = this.getNodeParameter('city', _itemIndex ?? 0) as string;
	const company = this.getNodeParameter('company', _itemIndex ?? 0) as string;
	const countryCode = this.getNodeParameter('countryCode', _itemIndex ?? 0) as string;
	const description = this.getNodeParameter('description', _itemIndex ?? 0) as string;
	const displayName = this.getNodeParameter('displayName', _itemIndex ?? 0) as string;
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const exchangeGuid = this.getNodeParameter('exchangeGuid', _itemIndex ?? 0) as string;
	const fax = this.getNodeParameter('fax', _itemIndex ?? 0) as string;
	const firstName = this.getNodeParameter('firstName', _itemIndex ?? 0) as string;
	const hiddenFromGAL = this.getNodeParameter('hiddenFromGAL', _itemIndex ?? 0) as string;
	const initials = this.getNodeParameter('initials', _itemIndex ?? 0) as string;
	const jobDepartment = this.getNodeParameter('jobDepartment', _itemIndex ?? 0) as string;
	const jobTitle = this.getNodeParameter('jobTitle', _itemIndex ?? 0) as string;
	const lastName = this.getNodeParameter('lastName', _itemIndex ?? 0) as string;
	const login = this.getNodeParameter('login', _itemIndex ?? 0) as string;
	const mobile = this.getNodeParameter('mobile', _itemIndex ?? 0) as string;
	const office = this.getNodeParameter('office', _itemIndex ?? 0) as string;
	const password = this.getNodeParameter('password', _itemIndex ?? 0) as string;
	const phone = this.getNodeParameter('phone', _itemIndex ?? 0) as string;
	const postalCode = this.getNodeParameter('postalCode', _itemIndex ?? 0) as string;
	const region = this.getNodeParameter('region', _itemIndex ?? 0) as string;
	const remoteRoutingAddress = this.getNodeParameter('remoteRoutingAddress', _itemIndex ?? 0) as string;
	const spamAndVirusConfiguration = this.getNodeParameter('spamAndVirusConfiguration', _itemIndex ?? 0) as string;
	const streetAddress = this.getNodeParameter('streetAddress', _itemIndex ?? 0) as string;
	const type = this.getNodeParameter('type', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    city: city,
    company: company,
    countryCode: countryCode,
    description: description,
    displayName: displayName,
    domain: domain,
    exchangeGuid: exchangeGuid,
    fax: fax,
    firstName: firstName,
    hiddenFromGAL: hiddenFromGAL,
    initials: initials,
    jobDepartment: jobDepartment,
    jobTitle: jobTitle,
    lastName: lastName,
    login: login,
    mobile: mobile,
    office: office,
    password: password,
    phone: phone,
    postalCode: postalCode,
    region: region,
    remoteRoutingAddress: remoteRoutingAddress,
    spamAndVirusConfiguration: spamAndVirusConfiguration,
    streetAddress: streetAddress,
    type: type
	};

	const client = getClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/remoteMailbox", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
