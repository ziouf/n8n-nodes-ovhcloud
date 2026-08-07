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
					emailDomainOperation: ['DomainAccountMigrateCheckGet'],
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
					emailDomainOperation: ['DomainAccountMigrateCheckGet'],
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
					emailDomainOperation: ['DomainAccountMigrateCheckGet'],
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
					emailDomainOperation: ['DomainAccountMigrateCheckGet'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Check if it's possible to migrate
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}/checkMigrate
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const destinationEmailAddress = this.getNodeParameter('destinationEmailAddress', 0) as string;
	const destinationServiceName = this.getNodeParameter('destinationServiceName', 0) as string;
	const domain = this.getNodeParameter('domain', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/account/' + encodeURIComponent(accountName) + '/migrate/' + encodeURIComponent(destinationServiceName) + '/destinationEmailAddress/' + encodeURIComponent(destinationEmailAddress) + '/checkMigrate')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
