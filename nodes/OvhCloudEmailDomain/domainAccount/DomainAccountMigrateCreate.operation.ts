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
					emailDomainOperation: ['DomainAccountMigrateCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Destination Email Address',
			name: 'destinationEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'Destination account name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountMigrateCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Destination Service Name',
			name: 'destinationServiceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Service name allowed as migration destination',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountMigrateCreate'],
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
					emailDomainOperation: ['DomainAccountMigrateCreate'],
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
			description: 'New password used for migration',
			typeOptions: {"password":true},
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountMigrateCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Migrate account to destination account
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/migrate
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const destinationEmailAddress = this.getNodeParameter('destinationEmailAddress', 0) as string;
	const destinationServiceName = this.getNodeParameter('destinationServiceName', 0) as string;
	const domain = this.getNodeParameter('domain', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;

	const body: IDataObject = {
		password: password,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/account/' + encodeURIComponent(accountName) + '/migrate/' + encodeURIComponent(destinationServiceName) + '/destinationEmailAddress/' + encodeURIComponent(destinationEmailAddress) + '/migrate', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
