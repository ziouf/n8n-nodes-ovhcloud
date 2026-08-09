import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			description: 'Name of email address',
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountGet'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			description: 'Domain of email address',
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountGet'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Delegated emails
 *
 * HTTP method: GET
 * Endpoint: /email/domain/delegatedAccount
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const accountName = this.getNodeParameter('accountName', _itemIndex ?? 0) as string;
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
		accountName: accountName,
		domain: domain,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain' + '/delegatedAccount', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
