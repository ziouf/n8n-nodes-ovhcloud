import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
					emailDomainOperation: ['DelegatedAccountFilterChangePriorityCreate'],
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
					emailDomainOperation: ['DelegatedAccountFilterChangePriorityCreate'],
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
			description: 'New priority',
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountFilterChangePriorityCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Change filter priority
 *
 * HTTP method: POST
 * Endpoint: /email/domain/delegatedAccount/{email}/filter/{name}/changePriority
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const priority = this.getNodeParameter('priority', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		priority: priority,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/domain' + '/delegatedAccount/' + encodeURIComponent(email) + '/filter/' + encodeURIComponent(name) + '/changePriority', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
