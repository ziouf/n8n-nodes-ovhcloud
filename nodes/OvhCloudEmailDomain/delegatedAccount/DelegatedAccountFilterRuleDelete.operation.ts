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
					emailDomainOperation: ['DelegatedAccountFilterRuleDelete'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Id',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The id parameter',
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', 0) as string;
	const id = this.getNodeParameter('id', 0) as any;
	const name = this.getNodeParameter('name', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/email' + '/domain' + '/delegatedAccount/' + encodeURIComponent(email) + '/filter/' + encodeURIComponent(name) + '/rule/' + encodeURIComponent(id))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
