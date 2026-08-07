import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', 0) as string;
	const account = this.getNodeParameter('account', 0) as string;

	const qs: IDataObject = {
		account: account,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/task' + '/mailinglist', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
