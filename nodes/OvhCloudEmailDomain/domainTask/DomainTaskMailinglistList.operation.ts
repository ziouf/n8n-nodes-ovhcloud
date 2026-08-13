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
					emailDomainOperation: ['DomainTaskMailinglistList'],
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
					emailDomainOperation: ['DomainTaskMailinglistList'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get Mailing List tasks
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/task/mailinglist
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const account = this.getNodeParameter('account', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
		account: account,
	};

	const client = getClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/task' + '/mailinglist', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
