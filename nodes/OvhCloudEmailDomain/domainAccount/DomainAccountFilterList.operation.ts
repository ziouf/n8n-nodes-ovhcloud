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
					emailDomainOperation: ['DomainAccountFilterList'],
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
					emailDomainOperation: ['DomainAccountFilterList'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get filters
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/account/{accountName}/filter
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const domain = this.getNodeParameter('domain', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/account/' + encodeURIComponent(accountName) + '/filter')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
