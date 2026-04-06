import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

/**
 * Update authenticated user information.
 *
 * HTTP method: PUT
 * Endpoint: /me
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Update Fields',
			name: 'updateFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions,
			options: [
				{
					displayName: 'Address',
					name: 'address',
					type: 'string',
					default: '',
					description: 'Street address',
				},
				{
					displayName: 'Address Complement',
					name: 'addressComplement',
					type: 'string',
					default: '',
					description: 'Additional address information',
				},
				{
					displayName: 'Area',
					name: 'area',
					type: 'string',
					default: '',
					description: 'Area/region',
				},
				{
					displayName: 'Birthday',
					name: 'birthday',
					type: 'string',
					default: '',
					description: 'Date of birth (YYYY-MM-DD)',
				},
				{
					displayName: 'City',
					name: 'city',
					type: 'string',
					default: '',
				},
				{
					displayName: 'Company National Identification Number',
					name: 'companyNationalIdentificationNumber',
					type: 'string',
					default: '',
					description: 'Company national ID number',
				},
				{
					displayName: 'Corporation Type',
					name: 'corporationType',
					type: 'options',
					options: [
						{ name: 'Association', value: 'association' },
						{ name: 'Other', value: 'other' },
						{ name: 'Private Individual', value: 'individual' },
						{ name: 'Public Body', value: 'publicBody' },
						{ name: 'Trading Company', value: 'tradingCompany' },
					],
					default: 'individual',
					description: 'Type of corporation',
				},
				{
					displayName: 'Country',
					name: 'country',
					type: 'string',
					default: '',
					description: 'Country code (ISO 3166-1 alpha-2)',
				},
				{
					displayName: 'Email',
					name: 'email',
					type: 'string',
					placeholder: 'name@email.com',
					default: '',
					description: 'Email address',
				},
				{
					displayName: 'Fax',
					name: 'fax',
					type: 'string',
					default: '',
					description: 'Fax number',
				},
				{
					displayName: 'Firstname',
					name: 'firstname',
					type: 'string',
					default: '',
					description: 'First name',
				},
				{
					displayName: 'Language',
					name: 'language',
					type: 'string',
					default: '',
					description: 'Language code (e.g., en_GB, fr_FR)',
				},
				{
					displayName: 'Lastname',
					name: 'lastname',
					type: 'string',
					default: '',
					description: 'Last name',
				},
				{
					displayName: 'Legal Form',
					name: 'legalForm',
					type: 'string',
					default: '',
					description: 'Legal form of the account',
				},
				{
					displayName: 'Name',
					name: 'name',
					type: 'string',
					default: '',
					description: 'Company or organization name',
				},
				{
					displayName: 'National Identification Number',
					name: 'nationalIdentificationNumber',
					type: 'string',
					default: '',
					description: 'National ID number',
				},
				{
					displayName: 'Organisation',
					name: 'organisation',
					type: 'string',
					default: '',
					description: 'Organisation name',
				},
				{
					displayName: 'Ovh Company',
					name: 'ovhCompany',
					type: 'string',
					default: '',
					description: 'OVH company entity',
				},
				{
					displayName: 'Ovh Subsidiary',
					name: 'ovhSubsidiary',
					type: 'string',
					default: '',
				},
				{
					displayName: 'Phone',
					name: 'phone',
					type: 'string',
					default: '',
					description: 'Phone number',
				},
				{
					displayName: 'Phone Country',
					name: 'phoneCountry',
					type: 'string',
					default: '',
					description: 'Phone country code',
				},
				{
					displayName: 'Sex',
					name: 'sex',
					type: 'options',
					options: [
						{ name: 'Female', value: 'female' },
						{ name: 'Male', value: 'male' },
						{ name: 'Unknown', value: 'unknown' },
					],
					default: 'unknown',
					description: 'Gender',
				},
				{
					displayName: 'Spam Obviation',
					name: 'spamObviation',
					type: 'boolean',
					default: false,
					description: 'Whether to enable spam obviation',
				},
				{
					displayName: 'Vat',
					name: 'vat',
					type: 'string',
					default: '',
					description: 'VAT number',
				},
				{
					displayName: 'Zip',
					name: 'zip',
					type: 'string',
					default: '',
					description: 'ZIP/Postal code',
				},
			],
		},
	];
}

/**
 * Executes the Update My Info operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const updateFields = this.getNodeParameter('updateFields', 0) as IDataObject;
	const data = (await client.httpPut('/me', { body: updateFields })) as IDataObject;
	return [{ json: data }];
}
