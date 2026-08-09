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
					emailDomainOperation: ['DomainAccountFilterRuleDelete'],
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
					emailDomainOperation: ['DomainAccountFilterRuleDelete'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID parameter',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountFilterRuleDelete'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Filter name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountFilterRuleDelete'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Delete an existing filter
 *
 * HTTP method: DELETE
 * Endpoint: /email/domain/{domain}/account/{accountName}/filter/{name}/rule/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const accountName = this.getNodeParameter('accountName', _itemIndex ?? 0) as string;
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/email' + '/domain/' + encodeURIComponent(domain) + '/account/' + encodeURIComponent(accountName) + '/filter/' + encodeURIComponent(name) + '/rule/' + encodeURIComponent(id))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
