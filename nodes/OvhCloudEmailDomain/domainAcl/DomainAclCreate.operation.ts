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
					emailDomainOperation: ['DomainAclCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Deleguates rights to',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAclCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Create new ACL
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/acl
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const accountId = this.getNodeParameter('accountId', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		accountId: accountId,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/acl', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
