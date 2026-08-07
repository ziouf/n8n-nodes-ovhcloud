import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			default: '',
			required: true,
			description: 'Email',
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountGet6'],
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
					emailDomainOperation: ['DelegatedAccountGet6'],
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
					emailDomainOperation: ['DelegatedAccountGet6'],
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
					emailDomainOperation: ['DelegatedAccountGet6'],
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
					emailDomainOperation: ['DelegatedAccountGet6'],
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
 * Endpoint: /email/domain/delegatedAccount/{email}/filter/{name}/rule
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const header = this.getNodeParameter('header', 0) as string;
	const operand = this.getNodeParameter('operand', 0) as string;
	const value = this.getNodeParameter('value', 0) as string;

	const body: IDataObject = {
		header: header,
		operand: operand,
		value: value,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain' + '/delegatedAccount/' + encodeURIComponent(email) + '/filter/' + encodeURIComponent(name) + '/rule', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
