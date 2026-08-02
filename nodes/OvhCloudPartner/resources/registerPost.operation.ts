import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/** Job positions accepted by the OVHcloud Partner Program API. */
const POSITION_OPTIONS = [
	{ name: 'AF', value: 'AF' },
	{ name: 'Business Owner', value: 'BusinessOwner' },
	{ name: 'HR', value: 'HR' },
	{ name: 'IT Devops', value: 'ITDevops' },
	{ name: 'IT Other', value: 'ITOther' },
	{ name: 'IT Sys Admin', value: 'ITSysAdmin' },
	{ name: 'LC', value: 'LC' },
	{ name: 'Marketing', value: 'Marketing' },
	{ name: 'Other', value: 'Other' },
	{ name: 'Pre Sales', value: 'PreSales' },
	{ name: 'Production', value: 'Production' },
	{ name: 'Purchasing', value: 'Purchasing' },
	{ name: 'R&D', value: 'RD' },
	{ name: 'Sales', value: 'Sales' },
];

/** Number of employees ranges accepted by the OVHcloud Partner Program API. */
const EMPLOYEES_OPTIONS = [
	{ name: '1 or 2', value: '1Or2' },
	{ name: '3 to 5', value: '3To5' },
	{ name: '6 to 9', value: '6To9' },
	{ name: '10 to 19', value: '10To19' },
	{ name: '20 to 49', value: '20To49' },
	{ name: '50 to 99', value: '50To99' },
	{ name: '100 to 199', value: '100To199' },
	{ name: '200 to 249', value: '200To249' },
	{ name: '250 to 499', value: '250To499' },
	{ name: '500 to 999', value: '500to999' },
	{ name: '1000 to 1999', value: '1000to1999' },
	{ name: '2000 to 4999', value: '2000to4999' },
	{ name: '5000 to 9999', value: '5000to9999' },
	{ name: 'Over 10000', value: 'over10000' },
];

/** Partner organization types accepted by the OVHcloud Partner Program API. */
const PARTNER_TYPE_OPTIONS = [
	{ name: 'Consulting Company', value: 'consultingCompany' },
	{ name: 'IaaS Provider', value: 'iaasProvider' },
	{ name: 'Managed Service Provider', value: 'managedServiceProvider' },
	{ name: 'Other', value: 'other' },
	{ name: 'Software Editor', value: 'softwareEditor' },
	{ name: 'Strategic Consulting', value: 'strategicConsulting' },
	{ name: 'Systems Integrator', value: 'systemsIntegrator' },
	{ name: 'Telecom Operators', value: 'telecomOperators' },
	{ name: 'Training Company', value: 'trainingCompany' },
	{ name: 'Value Added Reseller', value: 'valueAddedReseller' },
	{ name: 'Web Agency', value: 'webAgency' },
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the partner organization',
			displayOptions,
		},
		{
			displayName: 'Account City',
			name: 'accountCity',
			type: 'string',
			default: '',
			description: 'City where the partner organization is located',
			displayOptions,
		},
		{
			displayName: 'Account Country',
			name: 'accountCountry',
			type: 'string',
			default: '',
			description: 'Country where the partner organization is located',
			displayOptions,
		},
		{
			displayName: 'Company Turnover',
			name: 'accountCompanyTurnover',
			type: 'number',
			default: undefined,
			description: 'Company turnover in euros',
			displayOptions,
		},
		{
			displayName: 'Number of Employees',
			name: 'accountNumberOfEmployees',
			type: 'options',
			default: '',
			options: EMPLOYEES_OPTIONS,
			description: 'Number of employees in the partner organization',
			displayOptions,
		},
		{
			displayName: 'Partner Type',
			name: 'accountPartnerType',
			type: 'options',
			default: '',
			options: PARTNER_TYPE_OPTIONS,
			description: 'Type of partner organization',
			displayOptions,
		},
		{
			displayName: 'Year Established',
			name: 'accountYearEstablished',
			type: 'string',
			default: '',
			description: 'Year when the partner organization was established',
			displayOptions,
		},
		{
			displayName: 'Contact Email',
			name: 'contactEmail',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'name@email.com',
			description: 'Contact email address',
			displayOptions,
		},
		{
			displayName: 'Contact First Name',
			name: 'contactFirstName',
			type: 'string',
			default: '',
			required: true,
			description: 'First name of the primary contact person',
			displayOptions,
		},
		{
			displayName: 'Contact Last Name',
			name: 'contactLastName',
			type: 'string',
			default: '',
			required: true,
			description: 'Last name of the primary contact person',
			displayOptions,
		},
		{
			displayName: 'Contact Phone',
			name: 'contactPhone',
			type: 'string',
			default: '',
			required: true,
			description: 'Contact phone number',
			displayOptions,
		},
		{
			displayName: 'Contact Position',
			name: 'contactPosition',
			type: 'options',
			default: '',
			required: true,
			options: POSITION_OPTIONS,
			description: 'Job position of the contact person',
			displayOptions,
		},
		{
			displayName: 'Contact Job Title',
			name: 'contactJobTitle',
			type: 'string',
			default: '',
			description: 'Job title of the contact person',
			displayOptions,
		},
		{
			displayName: 'Partnership Area of Expertise',
			name: 'partnershipAreaOfExpertise',
			type: 'json',
			default: '[]',
			description:
				'Areas of expertise for the partnership, as an array of strings (e.g. ["VPS", "DC"])',
			displayOptions,
		},
		{
			displayName: 'Email Communication',
			name: 'partnershipEmailCommunication',
			type: 'boolean',
			default: false,
			description: 'Whether to opt in to email communication (GDPR compliance)',
			displayOptions,
		},
		{
			displayName: 'Partners Program Reason',
			name: 'partnershipPartnersProgramReason',
			type: 'string',
			default: '',
			description: 'Reason for joining the OVHcloud Partner Program',
			displayOptions,
		},
		{
			displayName: 'Sales Growth Opportunities',
			name: 'partnershipSalesGrowthOpportunities',
			type: 'string',
			default: '',
			description: 'Sales growth opportunities identified',
			displayOptions,
		},
		{
			displayName: 'Sales Projection',
			name: 'partnershipSalesProjection',
			type: 'number',
			default: undefined,
			description: 'Sales projection in euros',
			displayOptions,
		},
		{
			displayName: 'Support Agreement Statement',
			name: 'partnershipSupportAgreementStatement',
			type: 'boolean',
			default: false,
			description: 'Whether to accept the support agreement statement',
			displayOptions,
		},
	];
}

/**
 * Register an organization as a partner in the OVHcloud Partner Program.
 *
 * HTTP method: POST
 * Endpoint: /partner
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const account: IDataObject = {
		name: this.getNodeParameter('accountName', 0) as string,
	};

	const accountCity = (this.getNodeParameter('accountCity', 0, '') as string) || '';
	if (accountCity) account.city = accountCity;

	const accountCountry = (this.getNodeParameter('accountCountry', 0, '') as string) || '';
	if (accountCountry) account.country = accountCountry;

	const accountCompanyTurnover = this.getNodeParameter('accountCompanyTurnover', 0, undefined) as
		number | undefined;
	if (
		accountCompanyTurnover !== undefined &&
		typeof accountCompanyTurnover === 'number' &&
		!Number.isNaN(accountCompanyTurnover)
	) {
		account.companyTurnover = accountCompanyTurnover;
	}

	const accountNumberOfEmployees =
		(this.getNodeParameter('accountNumberOfEmployees', 0, '') as string) || '';
	if (accountNumberOfEmployees) account.numberOfEmployees = accountNumberOfEmployees;

	const accountPartnerType = (this.getNodeParameter('accountPartnerType', 0, '') as string) || '';
	if (accountPartnerType) account.partnerType = accountPartnerType;

	const accountYearEstablished =
		(this.getNodeParameter('accountYearEstablished', 0, '') as string) || '';
	if (accountYearEstablished) account.yearEstablished = accountYearEstablished;

	const contact: IDataObject = {
		email: this.getNodeParameter('contactEmail', 0) as string,
		firstName: this.getNodeParameter('contactFirstName', 0) as string,
		lastName: this.getNodeParameter('contactLastName', 0) as string,
		phone: this.getNodeParameter('contactPhone', 0) as string,
		position: this.getNodeParameter('contactPosition', 0) as string,
	};

	const contactJobTitle = (this.getNodeParameter('contactJobTitle', 0, '') as string) || '';
	if (contactJobTitle) contact.jobTitle = contactJobTitle;

	const partnership: IDataObject = {};

	const partnershipAreaOfExpertise = this.getNodeParameter(
		'partnershipAreaOfExpertise',
		0,
		[],
	) as IDataObject[];
	if (Array.isArray(partnershipAreaOfExpertise) && partnershipAreaOfExpertise.length > 0) {
		partnership.areaOfExpertise = partnershipAreaOfExpertise;
	}

	const emailCommunication = this.getNodeParameter(
		'partnershipEmailCommunication',
		0,
		false,
	) as boolean;
	if (emailCommunication) partnership.emailCommunication = emailCommunication;

	const partnersProgramReason =
		(this.getNodeParameter('partnershipPartnersProgramReason', 0, '') as string) || '';
	if (partnersProgramReason) partnership.partnersProgramReason = partnersProgramReason;

	const salesGrowthOpportunities =
		(this.getNodeParameter('partnershipSalesGrowthOpportunities', 0, '') as string) || '';
	if (salesGrowthOpportunities) partnership.salesGrowthOpportunities = salesGrowthOpportunities;

	const salesProjection = this.getNodeParameter('partnershipSalesProjection', 0, undefined) as
		number | undefined;
	if (
		salesProjection !== undefined &&
		typeof salesProjection === 'number' &&
		!Number.isNaN(salesProjection)
	) {
		partnership.salesProjection = salesProjection;
	}

	const supportAgreementStatement = this.getNodeParameter(
		'partnershipSupportAgreementStatement',
		0,
		false,
	) as boolean;
	if (supportAgreementStatement) partnership.supportAgreementStatement = supportAgreementStatement;

	const body: IDataObject = { account, contact };
	if (Object.keys(partnership).length > 0) {
		body.partnership = partnership;
	}

	await client.httpPost('/partner', body);

	return this.helpers.returnJsonArray([{ success: true }]);
}
