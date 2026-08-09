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
					emailDomainOperation: ['DelegatedAccountFilterRuleDelete'],
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
					emailDomainOperation: ['DelegatedAccountFilterRuleDelete'],
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
					emailDomainOperation: ['DelegatedAccountFilterRuleDelete'],
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
 * Endpoint: /email/domain/delegatedAccount/{email}/filter/{name}/rule/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/email' + '/domain' + '/delegatedAccount/' + encodeURIComponent(email) + '/filter/' + encodeURIComponent(name) + '/rule/' + encodeURIComponent(id))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
