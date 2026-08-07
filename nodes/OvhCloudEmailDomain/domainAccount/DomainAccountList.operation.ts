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
					emailDomainOperation: ['DomainAccountList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Account description',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountList'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get accounts
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/account
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', 0) as string;
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const description = this.getNodeParameter('description', 0) as string;

	const qs: IDataObject = {
		accountName: accountName,
		description: description,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/account', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
