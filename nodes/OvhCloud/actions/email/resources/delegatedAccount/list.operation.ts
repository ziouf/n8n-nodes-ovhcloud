import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List delegated accounts.
 *
 * HTTP method: GET
 * Endpoint: /email/domain/delegatedAccount
 * Query: accountName (optional), domain (optional)
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			description: 'Filter by account name',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			description: 'Filter by domain',
			displayOptions,
		},
	];
}

/**
 * Executes the List Delegated Accounts operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const accountName = this.getNodeParameter('accountName', 0, '') as string;
	const domain = this.getNodeParameter('domain', 0, '') as string;
	const qs: IDataObject = {};
	if (accountName) qs.accountName = accountName;
	if (domain) qs.domain = domain;
	const data = (await client.httpGet('/email/domain/delegatedAccount', qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
