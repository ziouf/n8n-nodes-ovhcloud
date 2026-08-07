import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountFilterCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Action',
			name: 'action',
			type: 'string',
			default: '',
			required: true,
			description: 'Action of filter',
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountFilterCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Action Param',
			name: 'actionParam',
			type: 'string',
			default: '',
			description: 'Action parameter of filter',
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountFilterCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Active',
			name: 'active',
			type: 'string',
			default: '',
			required: true,
			description: 'If true filter is active',
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountFilterCreate'],
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
					emailDomainOperation: ['DelegatedAccountFilterCreate'],
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
					emailDomainOperation: ['DelegatedAccountFilterCreate'],
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
					emailDomainOperation: ['DelegatedAccountFilterCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Priority',
			name: 'priority',
			type: 'string',
			default: '',
			required: true,
			description: 'Priority of filter',
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountFilterCreate'],
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
					emailDomainOperation: ['DelegatedAccountFilterCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Create new filter for account
 *
 * HTTP method: POST
 * Endpoint: /email/domain/delegatedAccount/{email}/filter
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', 0) as string;
	const action = this.getNodeParameter('action', 0) as string;
	const actionParam = this.getNodeParameter('actionParam', 0) as string;
	const active = this.getNodeParameter('active', 0) as boolean;
	const header = this.getNodeParameter('header', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const operand = this.getNodeParameter('operand', 0) as string;
	const priority = this.getNodeParameter('priority', 0) as string;
	const value = this.getNodeParameter('value', 0) as string;

	const body: IDataObject = {
		action: action,
		actionParam: actionParam,
		active: active,
		header: header,
		name: name,
		operand: operand,
		priority: priority,
		value: value,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain' + '/delegatedAccount/' + encodeURIComponent(email) + '/filter', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
