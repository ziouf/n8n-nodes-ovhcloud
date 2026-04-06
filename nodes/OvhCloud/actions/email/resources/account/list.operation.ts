import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List email accounts for a domain.
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/account
 * Query: accountName (optional), description (optional)
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
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Filter by description',
			displayOptions,
		},
	];
}

/**
 * Executes the List Accounts operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const accountName = this.getNodeParameter('accountName', 0, '') as string;
	const description = this.getNodeParameter('description', 0, '') as string;
	const qs: IDataObject = {};
	if (accountName) qs.accountName = accountName;
	if (description) qs.description = description;
	const data = (await client.httpGet(
		`/email/domain/${domainParam.value}/account`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
