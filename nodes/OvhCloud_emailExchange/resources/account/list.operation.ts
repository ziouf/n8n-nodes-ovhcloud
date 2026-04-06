import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List accounts for an Email Exchange service.
 *
 * HTTP method: GET
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
			displayName: 'Account License',
			name: 'accountLicense',
			type: 'string',
			default: '',
			description: 'Filter by account license',
			displayOptions,
		},
		{
			displayName: 'Company',
			name: 'company',
			type: 'string',
			default: '',
			description: 'Filter by company',
			displayOptions,
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			description: 'Filter by ID',
			displayOptions,
		},
		{
			displayName: 'Primary Email Address',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			description: 'Filter by primary email address',
			displayOptions,
		},
	];
}

/**
 * Executes the List Accounts operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const accountLicense = this.getNodeParameter('accountLicense', 0, '') as string;
	const company = this.getNodeParameter('company', 0, '') as string;
	const id = this.getNodeParameter('id', 0, '') as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0, '') as string;

	const qs: IDataObject = {};
	if (accountLicense) qs.accountLicense = accountLicense;
	if (company) qs.company = company;
	if (id) qs.id = id;
	if (primaryEmailAddress) qs.primaryEmailAddress = primaryEmailAddress;

	const data = (await client.httpGet(
		`/email/exchange/${organizationName}/service/${exchangeService}/account`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
