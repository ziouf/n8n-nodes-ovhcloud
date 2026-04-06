import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create an account for an Email Exchange service.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/account
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the organization',
			displayOptions,
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Exchange service',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain for the account',
			displayOptions,
		},
		{
			displayName: 'License',
			name: 'license',
			type: 'options',
			options: [
				{ name: 'Exchange', value: 'exchange' },
				{ name: 'Hosted Exchange', value: 'hostedExchange' },
				{ name: 'Kiosk', value: 'kiosk' },
			],
			default: 'exchange',
			required: true,
			description: 'The license type for the account',
			displayOptions,
		},
		{
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'The login for the account',
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			default: '',
			required: true,
			typeOptions: { password: true },
			description: 'The password for the account',
			displayOptions,
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Display name for the account',
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
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Company',
			name: 'company',
			type: 'string',
			default: '',
			description: 'Company name',
			displayOptions,
		},
		{
			displayName: 'Department',
			name: 'department',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Office',
			name: 'office',
			type: 'string',
			default: '',
			description: 'Office location',
			displayOptions,
		},
		{
			displayName: 'Short Name',
			name: 'shortName',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'City',
			name: 'city',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Zip Code',
			name: 'zipCode',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Street',
			name: 'street',
			type: 'string',
			default: '',
			description: 'Street address',
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
			displayName: 'Fax',
			name: 'fax',
			type: 'string',
			default: '',
			description: 'Fax number',
			displayOptions,
		},
		{
			displayName: 'Mobile Phone',
			name: 'mobilePhone',
			type: 'string',
			default: '',
			description: 'Mobile phone number',
			displayOptions,
		},
		{
			displayName: 'IP Load Balancing',
			name: 'ipLoadBalancing',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'SAM Account Name',
			name: 'samAccountName',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'User Principal Name',
			name: 'userPrincipalName',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Hidden From Address Lists',
			name: 'hiddenFromAddressLists',
			type: 'boolean',
			default: false,
			description: 'Whether to hide from address lists',
			displayOptions,
		},
		{
			displayName: 'Quota',
			name: 'quota',
			type: 'number',
			default: undefined,
			description: 'Account quota',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Account operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const domain = this.getNodeParameter('domain', 0) as string;
	const license = this.getNodeParameter('license', 0) as string;
	const login = this.getNodeParameter('login', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;

	const body: IDataObject = { domain, license, login, password };

	const optionalFields = [
		'displayName', 'firstName', 'lastName', 'company', 'department',
		'office', 'shortName', 'description', 'city', 'zipCode', 'street',
		'phone', 'fax', 'mobilePhone', 'ipLoadBalancing', 'samAccountName',
		'userPrincipalName', 'hiddenFromAddressLists', 'quota',
	];
	for (const field of optionalFields) {
		const val = this.getNodeParameter(field, 0, undefined);
		if (val !== undefined && val !== '') {
			body[field] = val;
		}
	}

	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/account`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
