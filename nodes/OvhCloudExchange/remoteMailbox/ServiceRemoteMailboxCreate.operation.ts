import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			description: 'City',
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
			description: 'Country code',
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description',
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Display name',
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
			description: 'First name',
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
			description: 'Initials',
		},
		{
			displayName: 'Job Department',
			name: 'jobDepartment',
			type: 'string',
			default: '',
			description: 'Job department',
		},
		{
			displayName: 'Job Title',
			name: 'jobTitle',
			type: 'string',
			default: '',
			description: 'Job title',
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'Last name',
		},
		{
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'Login',
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
			description: 'Office',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Password',
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
			description: 'Postal code',
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			description: 'Region',
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
			description: 'Street address',
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const city = this.getNodeParameter('city', 0) as any;
	const company = this.getNodeParameter('company', 0) as any;
	const countryCode = this.getNodeParameter('countryCode', 0) as any;
	const description = this.getNodeParameter('description', 0) as any;
	const displayName = this.getNodeParameter('displayName', 0) as any;
	const domain = this.getNodeParameter('domain', 0) as any;
	const exchangeGuid = this.getNodeParameter('exchangeGuid', 0) as any;
	const fax = this.getNodeParameter('fax', 0) as any;
	const firstName = this.getNodeParameter('firstName', 0) as any;
	const hiddenFromGAL = this.getNodeParameter('hiddenFromGAL', 0) as any;
	const initials = this.getNodeParameter('initials', 0) as any;
	const jobDepartment = this.getNodeParameter('jobDepartment', 0) as any;
	const jobTitle = this.getNodeParameter('jobTitle', 0) as any;
	const lastName = this.getNodeParameter('lastName', 0) as any;
	const login = this.getNodeParameter('login', 0) as any;
	const mobile = this.getNodeParameter('mobile', 0) as any;
	const office = this.getNodeParameter('office', 0) as any;
	const password = this.getNodeParameter('password', 0) as any;
	const phone = this.getNodeParameter('phone', 0) as any;
	const postalCode = this.getNodeParameter('postalCode', 0) as any;
	const region = this.getNodeParameter('region', 0) as any;
	const remoteRoutingAddress = this.getNodeParameter('remoteRoutingAddress', 0) as any;
	const spamAndVirusConfiguration = this.getNodeParameter('spamAndVirusConfiguration', 0) as any;
	const streetAddress = this.getNodeParameter('streetAddress', 0) as any;
	const type = this.getNodeParameter('type', 0) as any;

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

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/remoteMailbox", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
