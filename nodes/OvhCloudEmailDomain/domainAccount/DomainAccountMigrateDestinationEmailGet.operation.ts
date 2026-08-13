import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
					emailDomainOperation: ['DomainAccountMigrateDestinationEmailGet'],
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
					emailDomainOperation: ['DomainAccountMigrateDestinationEmailGet'],
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
					emailDomainOperation: ['DomainAccountMigrateDestinationEmailGet'],
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
					emailDomainOperation: ['DomainAccountMigrateDestinationEmailGet'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}/destinationEmailAddress/{destinationEmailAddress}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const accountName = this.getNodeParameter('accountName', _itemIndex ?? 0) as string;
	const destinationEmailAddress = this.getNodeParameter('destinationEmailAddress', _itemIndex ?? 0) as string;
	const destinationServiceName = this.getNodeParameter('destinationServiceName', _itemIndex ?? 0) as string;
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;

	const client = getClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/account/' + encodeURIComponent(accountName) + '/migrate/' + encodeURIComponent(destinationServiceName) + '/destinationEmailAddress/' + encodeURIComponent(destinationEmailAddress))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
