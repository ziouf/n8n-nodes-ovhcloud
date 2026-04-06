import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List responder tasks for an email domain.
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/task/responder
 * Query: account (optional)
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account',
			name: 'account',
			type: 'string',
			default: '',
			description: 'Filter by account name',
			displayOptions,
		},
	];
}

/**
 * Executes the List Responder Tasks operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const account = this.getNodeParameter('account', 0, '') as string;
	const qs: IDataObject = {};
	if (account) qs.account = account;
	const data = (await client.httpGet(
		`/email/domain/${domainParam.value}/task/responder`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
