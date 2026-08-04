import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Contact ID',
			name: 'contactId',
			type: 'string',
			default: '',
			required: true,
			description: 'The contactId identifier',
			displayOptions,
		},
		{
			displayName: 'Accreditation Country',
			name: 'accreditationCountry',
			type: 'string',
			default: '',
			description: 'Country of lawyer accreditation',
			displayOptions,
		},
		{
			displayName: 'Accreditation ID',
			name: 'accreditationId',
			type: 'string',
			default: '',
			description: 'Lawyer accreditation number',
			displayOptions,
		},
		{
			displayName: 'Accreditation Organism',
			name: 'accreditationOrganism',
			type: 'string',
			default: '',
			description: 'Organism of lawyer accreditation',
			displayOptions,
		},
		{
			displayName: 'Accreditation Year',
			name: 'accreditationYear',
			type: 'number',
			default: 0,
			description: 'Year of lawyer accreditation',
			displayOptions,
		},
		{
			displayName: 'Address',
			name: 'address',
			type: 'json',
			default: '',
			description: 'The address of the contact',
			displayOptions,
		},
		{
			displayName: 'Birth City',
			name: 'birthCity',
			type: 'string',
			default: '',
			description: 'City of birth',
			displayOptions,
		},
		{
			displayName: 'Birth Country',
			name: 'birthCountry',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Birth Day',
			name: 'birthDay',
			type: 'string',
			default: '',
			description: 'Birth date',
			displayOptions,
		},
		{
			displayName: 'Birth Zip',
			name: 'birthZip',
			type: 'string',
			default: '',
			description: 'Birth Zipcode',
			displayOptions,
		},
		{
			displayName: 'Cell Phone',
			name: 'cellPhone',
			type: 'string',
			default: '',
			description: 'Cellphone number',
			displayOptions,
		},
		{
			displayName: 'Company National Identification Number',
			name: 'companyNationalIdentificationNumber',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'Email address',
			displayOptions,
		},
		{
			displayName: 'Enterprise ID',
			name: 'enterpriseId',
			type: 'string',
			default: '',
			description: 'Enterprise identifier',
			displayOptions,
		},
		{
			displayName: 'Fax',
			name: 'fax',
			type: 'string',
			default: '',
			description: 'Fax number',
			displayOptions,
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Gender',
			name: 'gender',
			type: 'options',
			default: 'female',
			options: [
				{ name: 'Female', value: 'female' },
				{ name: 'Male', value: 'male' },
			],
			displayOptions,
		},
		{
			displayName: 'Insee',
			name: 'insee',
			type: 'string',
			default: '',
			description: 'INSEE identifier',
			displayOptions,
		},
		{
			displayName: 'Language',
			name: 'language',
			type: 'options',
			default: 'cs_CZ',
			options: [
				{ name: 'cs_CZ', value: 'cs_CZ' },
				{ name: 'de_DE', value: 'de_DE' },
				{ name: 'en_AU', value: 'en_AU' },
				{ name: 'en_CA', value: 'en_CA' },
				{ name: 'en_GB', value: 'en_GB' },
				{ name: 'en_IE', value: 'en_IE' },
				{ name: 'en_US', value: 'en_US' },
				{ name: 'es_ES', value: 'es_ES' },
				{ name: 'fi_FI', value: 'fi_FI' },
				{ name: 'fr_CA', value: 'fr_CA' },
				{ name: 'fr_FR', value: 'fr_FR' },
				{ name: 'fr_MA', value: 'fr_MA' },
				{ name: 'fr_SN', value: 'fr_SN' },
				{ name: 'fr_TN', value: 'fr_TN' },
				{ name: 'it_IT', value: 'it_IT' },
				{ name: 'lt_LT', value: 'lt_LT' },
				{ name: 'nl_NL', value: 'nl_NL' },
				{ name: 'pl_PL', value: 'pl_PL' },
				{ name: 'pt_PT', value: 'pt_PT' },
			],
			displayOptions,
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Legal Form',
			name: 'legalForm',
			type: 'options',
			default: 'administration',
			options: [
				{ name: 'Administration', value: 'administration' },
				{ name: 'Association', value: 'association' },
				{ name: 'Corporation', value: 'corporation' },
				{ name: 'Individual', value: 'individual' },
				{ name: 'Other', value: 'other' },
				{ name: 'Personalcorporation', value: 'personalcorporation' },
			],
			description: 'Legal Form value',
			displayOptions,
		},
		{
			displayName: 'Legal Form Category',
			name: 'legalFormCategory',
			type: 'string',
			default: '',
			description: 'Category of legalForm',
			displayOptions,
		},
		{
			displayName: 'National Identification Number',
			name: 'nationalIdentificationNumber',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Nationality',
			name: 'nationality',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Organisation Accountable',
			name: 'organisationAccountable',
			type: 'string',
			default: '',
			description: 'To whom is the organisation accountable',
			displayOptions,
		},
		{
			displayName: 'Organisation Funding',
			name: 'organisationFunding',
			type: 'string',
			default: '',
			description: 'What is the source of funding',
			displayOptions,
		},
		{
			displayName: 'Organisation Funding Other',
			name: 'organisationFundingOther',
			type: 'string',
			default: '',
			description: 'Explain the source of funding if organisationFunding is other',
			displayOptions,
		},
		{
			displayName: 'Organisation Name',
			name: 'organisationName',
			type: 'string',
			default: '',
			description: 'Name of organisation',
			displayOptions,
		},
		{
			displayName: 'Organisation Role',
			name: 'organisationRole',
			type: 'string',
			default: '',
			description: 'Role of your organisation',
			displayOptions,
		},
		{
			displayName: 'Organisation Role Other',
			name: 'organisationRoleOther',
			type: 'string',
			default: '',
			description: 'Explain the role of your organisation if organisationRole is other',
			displayOptions,
		},
		{
			displayName: 'Organisation Staff Status',
			name: 'organisationStaffStatus',
			type: 'string',
			default: '',
			description: 'Status of the staff',
			displayOptions,
		},
		{
			displayName: 'Organisation Staff Status Other',
			name: 'organisationStaffStatusOther',
			type: 'string',
			default: '',
			description: 'Explain the status of the staff if organisationStaffStatus is other',
			displayOptions,
		},
		{
			displayName: 'Organisation Type',
			name: 'organisationType',
			type: 'string',
			default: '',
			description: 'Type of organisation',
			displayOptions,
		},
		{
			displayName: 'Organisation Type Other',
			name: 'organisationTypeOther',
			type: 'string',
			default: '',
			description: 'Explain the type of organisation if organisationType is other',
			displayOptions,
		},
		{
			displayName: 'Phone',
			name: 'phone',
			type: 'string',
			default: '',
			description: 'Phone number',
			displayOptions,
		},
		{
			displayName: 'Registrant Document Type',
			name: 'registrantDocumentType',
			type: 'string',
			default: '',
			description: 'Type of registrant document',
			displayOptions,
		},
		{
			displayName: 'Registrant Document Type Other',
			name: 'registrantDocumentTypeOther',
			type: 'string',
			default: '',
			description: 'Explain the type of registrant document if registrantDocumentType is other',
			displayOptions,
		},
		{
			displayName: 'Role In Organisation',
			name: 'roleInOrganisation',
			type: 'string',
			default: '',
			description: 'The role in the organisation',
			displayOptions,
		},
		{
			displayName: 'Trademark ID',
			name: 'trademarkId',
			type: 'string',
			default: '',
			description: 'Trademark related to the contact',
			displayOptions,
		},
		{
			displayName: 'Vat',
			name: 'vat',
			type: 'string',
			default: '',
			description: 'VAT number',
			displayOptions,
		},
		{
			displayName: 'Website',
			name: 'website',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Update a contact operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/contact/{contactId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const contactId = this.getNodeParameter('contactId', itemIndex) as string;

	const body: IDataObject = {};
		const accreditationCountry = this.getNodeParameter('accreditationCountry', itemIndex, '') as string;
		if (accreditationCountry !== '') body['accreditationCountry'] = accreditationCountry;
		const accreditationId = this.getNodeParameter('accreditationId', itemIndex, '') as string;
		if (accreditationId !== '') body['accreditationId'] = accreditationId;
		const accreditationOrganism = this.getNodeParameter('accreditationOrganism', itemIndex, '') as string;
		if (accreditationOrganism !== '') body['accreditationOrganism'] = accreditationOrganism;
		const accreditationYear = this.getNodeParameter('accreditationYear', itemIndex, 0) as number;
		if (accreditationYear !== 0) body['accreditationYear'] = accreditationYear;
		const address = this.getNodeParameter('address', itemIndex, '') as string;
		if (address !== '') body['address'] = JSON.parse(address);
		const birthCity = this.getNodeParameter('birthCity', itemIndex, '') as string;
		if (birthCity !== '') body['birthCity'] = birthCity;
		const birthCountry = this.getNodeParameter('birthCountry', itemIndex, '') as string;
		if (birthCountry !== '') body['birthCountry'] = birthCountry;
		const birthDay = this.getNodeParameter('birthDay', itemIndex, '') as string;
		if (birthDay !== '') body['birthDay'] = birthDay;
		const birthZip = this.getNodeParameter('birthZip', itemIndex, '') as string;
		if (birthZip !== '') body['birthZip'] = birthZip;
		const cellPhone = this.getNodeParameter('cellPhone', itemIndex, '') as string;
		if (cellPhone !== '') body['cellPhone'] = cellPhone;
		const companyNationalIdentificationNumber = this.getNodeParameter('companyNationalIdentificationNumber', itemIndex, '') as string;
		if (companyNationalIdentificationNumber !== '') body['companyNationalIdentificationNumber'] = companyNationalIdentificationNumber;
		const email = this.getNodeParameter('email', itemIndex, '') as string;
		if (email !== '') body['email'] = email;
		const enterpriseId = this.getNodeParameter('enterpriseId', itemIndex, '') as string;
		if (enterpriseId !== '') body['enterpriseId'] = enterpriseId;
		const fax = this.getNodeParameter('fax', itemIndex, '') as string;
		if (fax !== '') body['fax'] = fax;
		const firstName = this.getNodeParameter('firstName', itemIndex, '') as string;
		if (firstName !== '') body['firstName'] = firstName;
		const gender = this.getNodeParameter('gender', itemIndex, '') as string;
		if (gender !== '') body['gender'] = gender;
		const insee = this.getNodeParameter('insee', itemIndex, '') as string;
		if (insee !== '') body['insee'] = insee;
		const language = this.getNodeParameter('language', itemIndex, '') as string;
		if (language !== '') body['language'] = language;
		const lastName = this.getNodeParameter('lastName', itemIndex, '') as string;
		if (lastName !== '') body['lastName'] = lastName;
		const legalForm = this.getNodeParameter('legalForm', itemIndex, '') as string;
		if (legalForm !== '') body['legalForm'] = legalForm;
		const legalFormCategory = this.getNodeParameter('legalFormCategory', itemIndex, '') as string;
		if (legalFormCategory !== '') body['legalFormCategory'] = legalFormCategory;
		const nationalIdentificationNumber = this.getNodeParameter('nationalIdentificationNumber', itemIndex, '') as string;
		if (nationalIdentificationNumber !== '') body['nationalIdentificationNumber'] = nationalIdentificationNumber;
		const nationality = this.getNodeParameter('nationality', itemIndex, '') as string;
		if (nationality !== '') body['nationality'] = nationality;
		const organisationAccountable = this.getNodeParameter('organisationAccountable', itemIndex, '') as string;
		if (organisationAccountable !== '') body['organisationAccountable'] = organisationAccountable;
		const organisationFunding = this.getNodeParameter('organisationFunding', itemIndex, '') as string;
		if (organisationFunding !== '') body['organisationFunding'] = organisationFunding;
		const organisationFundingOther = this.getNodeParameter('organisationFundingOther', itemIndex, '') as string;
		if (organisationFundingOther !== '') body['organisationFundingOther'] = organisationFundingOther;
		const organisationName = this.getNodeParameter('organisationName', itemIndex, '') as string;
		if (organisationName !== '') body['organisationName'] = organisationName;
		const organisationRole = this.getNodeParameter('organisationRole', itemIndex, '') as string;
		if (organisationRole !== '') body['organisationRole'] = organisationRole;
		const organisationRoleOther = this.getNodeParameter('organisationRoleOther', itemIndex, '') as string;
		if (organisationRoleOther !== '') body['organisationRoleOther'] = organisationRoleOther;
		const organisationStaffStatus = this.getNodeParameter('organisationStaffStatus', itemIndex, '') as string;
		if (organisationStaffStatus !== '') body['organisationStaffStatus'] = organisationStaffStatus;
		const organisationStaffStatusOther = this.getNodeParameter('organisationStaffStatusOther', itemIndex, '') as string;
		if (organisationStaffStatusOther !== '') body['organisationStaffStatusOther'] = organisationStaffStatusOther;
		const organisationType = this.getNodeParameter('organisationType', itemIndex, '') as string;
		if (organisationType !== '') body['organisationType'] = organisationType;
		const organisationTypeOther = this.getNodeParameter('organisationTypeOther', itemIndex, '') as string;
		if (organisationTypeOther !== '') body['organisationTypeOther'] = organisationTypeOther;
		const phone = this.getNodeParameter('phone', itemIndex, '') as string;
		if (phone !== '') body['phone'] = phone;
		const registrantDocumentType = this.getNodeParameter('registrantDocumentType', itemIndex, '') as string;
		if (registrantDocumentType !== '') body['registrantDocumentType'] = registrantDocumentType;
		const registrantDocumentTypeOther = this.getNodeParameter('registrantDocumentTypeOther', itemIndex, '') as string;
		if (registrantDocumentTypeOther !== '') body['registrantDocumentTypeOther'] = registrantDocumentTypeOther;
		const roleInOrganisation = this.getNodeParameter('roleInOrganisation', itemIndex, '') as string;
		if (roleInOrganisation !== '') body['roleInOrganisation'] = roleInOrganisation;
		const trademarkId = this.getNodeParameter('trademarkId', itemIndex, '') as string;
		if (trademarkId !== '') body['trademarkId'] = trademarkId;
		const vat = this.getNodeParameter('vat', itemIndex, '') as string;
		if (vat !== '') body['vat'] = vat;
		const website = this.getNodeParameter('website', itemIndex, '') as string;
		if (website !== '') body['website'] = website;

	const data = (await client.httpPut(`/domain/contact/${encodeURIComponent(contactId)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
