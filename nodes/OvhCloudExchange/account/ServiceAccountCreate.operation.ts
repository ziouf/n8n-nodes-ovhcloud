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
			displayName: 'S A M Account Name',
			name: 'SAMAccountName',
			type: 'string',
			default: '',
			description: 'SAM account name (exchange 2010 login)',
		},
		{
			displayName: 'Authentication Policy Id',
			name: 'authenticationPolicyId',
			type: 'string',
			default: '',
			description: 'ID of the authentication policy',
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
			description: 'Account display name',
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
			description: 'Account first name',
		},
		{
			displayName: 'Forwarding Email',
			name: 'forwardingEmail',
			type: 'string',
			default: '',
			description: 'Email address to forward email',
		},
		{
			displayName: 'Hidden From G A L',
			name: 'hiddenFromGAL',
			type: 'string',
			default: '',
			description: 'Hide the account in Global Address List',
		},
		{
			displayName: 'Initials',
			name: 'initials',
			type: 'string',
			default: '',
			description: 'Account initials',
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
			description: 'Account last name',
		},
		{
			displayName: 'License',
			name: 'license',
			type: 'string',
			default: '',
			required: true,
			description: 'Exchange license',
		},
		{
			displayName: 'Litigation',
			name: 'litigation',
			type: 'string',
			default: '',
			description: 'Litigation status',
		},
		{
			displayName: 'Litigation Period',
			name: 'litigationPeriod',
			type: 'string',
			default: '',
			description: 'Litigation length in days, 0 means unlimited',
		},
		{
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'Account login',
		},
		{
			displayName: 'Mail Sender Display',
			name: 'mailSenderDisplay',
			type: 'string',
			default: '',
			description: 'Email display as sender',
		},
		{
			displayName: 'Mailing Filter',
			name: 'mailingFilter',
			type: 'string',
			default: '',
			description: 'Enable mailing filtrering',
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
			description: 'office',
		},
		{
			displayName: 'Outlook License',
			name: 'outlookLicense',
			type: 'string',
			default: '',
			description: 'Buy outlook license',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Account password',
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
			displayName: 'Quota',
			name: 'quota',
			type: 'string',
			default: '',
			description: 'Quota specified in GB. Check pricing table before use',
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			description: 'Region',
		},
		{
			displayName: 'Sbr Destination',
			name: 'sbrDestination',
			type: 'string',
			default: '',
			description: 'Sender base routing destination domain',
		},
		{
			displayName: 'Send Connector Id',
			name: 'sendConnectorId',
			type: 'string',
			default: '',
			description: 'Send connector id used to send mails when SBR is defined',
		},
		{
			displayName: 'Spam And Virus Configuration',
			name: 'spamAndVirusConfiguration',
			type: 'string',
			default: '',
			description: 'Antispam and Antivirus configuration',
		},
		{
			displayName: 'Store Copy Of Email',
			name: 'storeCopyOfEmail',
			type: 'string',
			default: '',
			description: 'Store copy of email when forward is enable',
		},
		{
			displayName: 'Street Address',
			name: 'streetAddress',
			type: 'string',
			default: '',
			description: 'Street address',
		},
	];
}

/**
 * Create new mailbox in exchange server
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/account
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const SAMAccountName = this.getNodeParameter('SAMAccountName', 0) as any;
	const authenticationPolicyId = this.getNodeParameter('authenticationPolicyId', 0) as any;
	const city = this.getNodeParameter('city', 0) as any;
	const company = this.getNodeParameter('company', 0) as any;
	const countryCode = this.getNodeParameter('countryCode', 0) as any;
	const description = this.getNodeParameter('description', 0) as any;
	const displayName = this.getNodeParameter('displayName', 0) as any;
	const domain = this.getNodeParameter('domain', 0) as any;
	const fax = this.getNodeParameter('fax', 0) as any;
	const firstName = this.getNodeParameter('firstName', 0) as any;
	const forwardingEmail = this.getNodeParameter('forwardingEmail', 0) as any;
	const hiddenFromGAL = this.getNodeParameter('hiddenFromGAL', 0) as any;
	const initials = this.getNodeParameter('initials', 0) as any;
	const jobDepartment = this.getNodeParameter('jobDepartment', 0) as any;
	const jobTitle = this.getNodeParameter('jobTitle', 0) as any;
	const lastName = this.getNodeParameter('lastName', 0) as any;
	const license = this.getNodeParameter('license', 0) as any;
	const litigation = this.getNodeParameter('litigation', 0) as any;
	const litigationPeriod = this.getNodeParameter('litigationPeriod', 0) as any;
	const login = this.getNodeParameter('login', 0) as any;
	const mailSenderDisplay = this.getNodeParameter('mailSenderDisplay', 0) as any;
	const mailingFilter = this.getNodeParameter('mailingFilter', 0) as any;
	const mobile = this.getNodeParameter('mobile', 0) as any;
	const office = this.getNodeParameter('office', 0) as any;
	const outlookLicense = this.getNodeParameter('outlookLicense', 0) as any;
	const password = this.getNodeParameter('password', 0) as any;
	const phone = this.getNodeParameter('phone', 0) as any;
	const postalCode = this.getNodeParameter('postalCode', 0) as any;
	const quota = this.getNodeParameter('quota', 0) as any;
	const region = this.getNodeParameter('region', 0) as any;
	const sbrDestination = this.getNodeParameter('sbrDestination', 0) as any;
	const sendConnectorId = this.getNodeParameter('sendConnectorId', 0) as any;
	const spamAndVirusConfiguration = this.getNodeParameter('spamAndVirusConfiguration', 0) as any;
	const storeCopyOfEmail = this.getNodeParameter('storeCopyOfEmail', 0) as any;
	const streetAddress = this.getNodeParameter('streetAddress', 0) as any;

	const body: IDataObject = {
    SAMAccountName: SAMAccountName,
    authenticationPolicyId: authenticationPolicyId,
    city: city,
    company: company,
    countryCode: countryCode,
    description: description,
    displayName: displayName,
    domain: domain,
    fax: fax,
    firstName: firstName,
    forwardingEmail: forwardingEmail,
    hiddenFromGAL: hiddenFromGAL,
    initials: initials,
    jobDepartment: jobDepartment,
    jobTitle: jobTitle,
    lastName: lastName,
    license: license,
    litigation: litigation,
    litigationPeriod: litigationPeriod,
    login: login,
    mailSenderDisplay: mailSenderDisplay,
    mailingFilter: mailingFilter,
    mobile: mobile,
    office: office,
    outlookLicense: outlookLicense,
    password: password,
    phone: phone,
    postalCode: postalCode,
    quota: quota,
    region: region,
    sbrDestination: sbrDestination,
    sendConnectorId: sendConnectorId,
    spamAndVirusConfiguration: spamAndVirusConfiguration,
    storeCopyOfEmail: storeCopyOfEmail,
    streetAddress: streetAddress
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/account", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
