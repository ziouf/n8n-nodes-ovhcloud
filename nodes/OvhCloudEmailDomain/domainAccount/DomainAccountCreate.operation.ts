/* eslint-disable n8n-nodes-base/node-param-type-options-password-missing */
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
					emailDomainOperation: ['DomainAccountCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			required: true,
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description Account',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountCreate'],
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
			description: 'Account password',
			typeOptions: {"password":true},
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Size',
			name: 'size',
			type: 'string',
			default: '',
			description: 'Account size in bytes (default : 5000000000) (possible values : /email/domain/{domain}/allowedAccountSize )',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Create new mailbox in server
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/account
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const accountName = this.getNodeParameter('accountName', _itemIndex ?? 0) as string;
	const description = this.getNodeParameter('description', _itemIndex ?? 0) as string;
	const password = this.getNodeParameter('password', _itemIndex ?? 0) as string;
	const size = this.getNodeParameter('size', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		accountName: accountName,
		description: description,
		password: password,
		size: size,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/account', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
