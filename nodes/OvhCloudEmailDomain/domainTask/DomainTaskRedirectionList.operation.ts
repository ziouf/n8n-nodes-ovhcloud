import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of your domain name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainTaskRedirectionList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Account',
			name: 'account',
			type: 'string',
			default: '',
			description: 'Account name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainTaskRedirectionList'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get redirection tasks
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/task/redirection
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const account = this.getNodeParameter('account', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
		account: account,
	};

	const client = getClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/task' + '/redirection', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
