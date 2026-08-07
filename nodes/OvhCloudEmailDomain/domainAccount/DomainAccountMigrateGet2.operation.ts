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
					emailDomainOperation: ['DomainAccountMigrateGet2'],
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
					emailDomainOperation: ['DomainAccountMigrateGet2'],
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
					emailDomainOperation: ['DomainAccountMigrateGet2'],
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
 * Endpoint: /email/domain/{domain}/account/{accountName}/migrate/{destinationServiceName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const destinationServiceName = this.getNodeParameter('destinationServiceName', 0) as string;
	const domain = this.getNodeParameter('domain', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/account/' + encodeURIComponent(accountName) + '/migrate/' + encodeURIComponent(destinationServiceName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
