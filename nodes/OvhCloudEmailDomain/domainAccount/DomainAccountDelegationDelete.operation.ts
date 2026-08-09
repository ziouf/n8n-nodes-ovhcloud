import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'string',
			default: '',
			required: true,
			description: 'OVH customer unique identifier',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountDelegationDelete'],
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
			description: 'Name of account',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountDelegationDelete'],
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
					emailDomainOperation: ['DomainAccountDelegationDelete'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Delete an existing delegation
 *
 * HTTP method: DELETE
 * Endpoint: /email/domain/{domain}/account/{accountName}/delegation/{accountId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const accountId = this.getNodeParameter('accountId', _itemIndex ?? 0) as string;
	const accountName = this.getNodeParameter('accountName', _itemIndex ?? 0) as string;
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/email' + '/domain/' + encodeURIComponent(domain) + '/account/' + encodeURIComponent(accountName) + '/delegation/' + encodeURIComponent(accountId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
