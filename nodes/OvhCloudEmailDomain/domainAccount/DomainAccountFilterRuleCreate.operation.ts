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
					emailDomainOperation: ['DomainAccountFilterRuleCreate'],
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
					emailDomainOperation: ['DomainAccountFilterRuleCreate'],
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
					emailDomainOperation: ['DomainAccountFilterRuleCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Header',
			name: 'header',
			type: 'string',
			default: '',
			required: true,
			description: 'Header to be filtered',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountFilterRuleCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Operand',
			name: 'operand',
			type: 'string',
			default: '',
			required: true,
			description: 'Rule of filter',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountFilterRuleCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Value',
			name: 'value',
			type: 'string',
			default: '',
			required: true,
			description: 'Rule parameter of filter',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainAccountFilterRuleCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Create new rule for filter
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/account/{accountName}/filter/{name}/rule
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const accountName = this.getNodeParameter('accountName', _itemIndex ?? 0) as string;
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const header = this.getNodeParameter('header', _itemIndex ?? 0) as string;
	const operand = this.getNodeParameter('operand', _itemIndex ?? 0) as string;
	const value = this.getNodeParameter('value', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		header: header,
		operand: operand,
		value: value,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/account/' + encodeURIComponent(accountName) + '/filter/' + encodeURIComponent(name) + '/rule', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
