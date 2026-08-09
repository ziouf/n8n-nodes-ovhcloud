/* eslint-disable n8n-nodes-base/node-param-type-options-password-missing */
import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of account',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountChangePasswordCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of your domain name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountChangePasswordCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			default: '',
			required: true,
			description: 'New password',
			typeOptions: {"password":true},
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountChangePasswordCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Change mailbox password (length : [9;30], no space at begin and end, no accent)
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/account/{accountName}/changePassword
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const accountName = this.getNodeParameter('accountName', _itemIndex ?? 0) as string;
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const password = this.getNodeParameter('password', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		password: password,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/account/' + encodeURIComponent(accountName) + '/changePassword', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
