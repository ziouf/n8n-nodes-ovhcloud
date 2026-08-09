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
			displayName: 'Account License',
			name: 'accountLicense',
			type: 'string',
			default: '',
			description: 'Filter the value of accountLicense property (=)',
		},
		{
			displayName: 'Company',
			name: 'company',
			type: 'string',
			default: '',
			description: 'Filter the value of company property (like)',
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			description: 'Filter the value of ID property (like)',
		},
		{
			displayName: 'Primary Email Address',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			description: 'Filter the value of primaryEmailAddress property (like)',
		},
	];
}

/**
 * Accounts associated to this exchange service
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/account
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const accountLicense = this.getNodeParameter('accountLicense', _itemIndex ?? 0) as string;
	const company = this.getNodeParameter('company', _itemIndex ?? 0) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
    accountLicense: accountLicense,
    company: company,
    id: id,
    primaryEmailAddress: primaryEmailAddress
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/account", qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
