import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';

/**
 * Display metadata for each flat body field of the `/newAccount` endpoints.
 *
 * The `POST /newAccount`, `POST /newAccount/creationRules` and
 * `POST /newAccount/rules` operations all accept the same identifier fields,
 * so the field definitions are shared here to avoid drift.
 */
const FIELD_DEFINITIONS: Array<{ name: string; displayName: string; description: string }> = [
	{ name: 'address', displayName: 'Address', description: 'Physical address of the identifier' },
	{ name: 'area', displayName: 'Area', description: 'Area of residence' },
	{ name: 'birthCity', displayName: 'Birth City', description: 'City of birth' },
	{ name: 'birthDay', displayName: 'Birth Day', description: 'Day of birth' },
	{ name: 'city', displayName: 'City', description: 'City of residence' },
	{
		name: 'companyNationalIdentificationNumber',
		displayName: 'Company National Identification Number',
		description: 'National identification number for a corporation',
	},
	{
		name: 'corporationType',
		displayName: 'Corporation Type',
		description: 'Type of the corporation',
	},
	{ name: 'country', displayName: 'Country', description: 'Country of the identifier (e.g. FR)' },
	{ name: 'email', displayName: 'Email', description: 'Primary email address' },
	{ name: 'fax', displayName: 'Fax', description: 'Fax number' },
	{ name: 'firstname', displayName: 'First Name', description: 'First name of the account holder' },
	{ name: 'italianSDI', displayName: 'Italian SDI', description: 'Italian SDI number' },
	{ name: 'language', displayName: 'Language', description: 'Preferred language (e.g. fr_FR)' },
	{
		name: 'legalform',
		displayName: 'Legal Form',
		description: 'Legal form of the identifier (e.g. individual)',
	},
	{ name: 'name', displayName: 'Name', description: 'Last name of the account holder' },
	{
		name: 'nationalIdentificationNumber',
		displayName: 'National Identification Number',
		description: 'National identification number',
	},
	{ name: 'organisation', displayName: 'Organisation', description: 'Name of the organization' },
	{
		name: 'ovhCompany',
		displayName: 'OVH Company',
		description: 'OVH company (e.g. ovh, kimsufi, soyoustart)',
	},
	{
		name: 'ovhSubsidiary',
		displayName: 'OVH Subsidiary',
		description: 'OVH subsidiary (e.g. FR, GB, US)',
	},
	{ name: 'phone', displayName: 'Phone', description: 'Phone number' },
	{
		name: 'phoneCountry',
		displayName: 'Phone Country',
		description: 'Country of the phone number',
	},
	{
		name: 'phoneType',
		displayName: 'Phone Type',
		description: 'Type of the phone number (e.g. mobile)',
	},
	{
		name: 'purposeOfPurchase',
		displayName: 'Purpose of Purchase',
		description: 'Purpose of the purchase',
	},
	{
		name: 'sex',
		displayName: 'Sex',
		description: 'Gender of the account holder (e.g. male, female)',
	},
	{ name: 'spareEmail', displayName: 'Spare Email', description: 'Additional email address' },
	{ name: 'vat', displayName: 'VAT', description: 'VAT number' },
	{ name: 'zip', displayName: 'ZIP Code', description: 'ZIP/postal code' },
];

/** The `action` field, only used by the rules-like operations. */
const ACTION_FIELD = {
	name: 'action',
	displayName: 'Action',
	description: 'Action to perform (create or update)',
};

/**
 * Build the flat string properties for a `/newAccount` body.
 *
 * @param displayOptions - n8n display options used to show/hide the fields
 * @param options - `includeAction` adds the `action` field, `requiredFields` marks fields as required
 */
export function newAccountStringFieldProperties(
	displayOptions: IDisplayOptions,
	options: { includeAction?: boolean; requiredFields?: string[] } = {},
): INodeProperties[] {
	const entries = options.includeAction ? [ACTION_FIELD, ...FIELD_DEFINITIONS] : FIELD_DEFINITIONS;
	const requiredFields = options.requiredFields ?? [];

	return entries.map(({ name, displayName, description }) => ({
		displayName,
		name,
		type: 'string',
		default: '',
		required: requiredFields.includes(name),
		description,
		displayOptions,
	}));
}

/**
 * Build the request body for a `/newAccount` endpoint from the node parameters,
 * keeping only the fields that were provided (non-empty).
 *
 * @param fn - The n8n execute functions context
 * @param options - `includeAction` also reads the optional `action` field
 */
export function buildNewAccountBody(
	fn: IExecuteFunctions,
	options: { includeAction?: boolean } = {},
): IDataObject {
	const fieldNames = options.includeAction
		? [ACTION_FIELD.name, ...FIELD_DEFINITIONS.map((field) => field.name)]
		: FIELD_DEFINITIONS.map((field) => field.name);

	const body: IDataObject = {};
	for (const field of fieldNames) {
		const value = (fn.getNodeParameter(field, 0, '') as string) || '';
		if (value) {
			body[field] = value;
		}
	}
	return body;
}
