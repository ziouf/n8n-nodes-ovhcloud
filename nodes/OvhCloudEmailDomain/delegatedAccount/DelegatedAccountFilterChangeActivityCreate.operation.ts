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
					emailDomainOperation: ['DelegatedAccountFilterChangeActivityCreate'],
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
					emailDomainOperation: ['DelegatedAccountFilterChangeActivityCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Activity',
			name: 'activity',
			type: 'string',
			default: '',
			required: true,
			description: 'New activity',
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountFilterChangeActivityCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Change filter activity
 *
 * HTTP method: POST
 * Endpoint: /email/domain/delegatedAccount/{email}/filter/{name}/changeActivity
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const activity = this.getNodeParameter('activity', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		activity: activity,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/domain' + '/delegatedAccount/' + encodeURIComponent(email) + '/filter/' + encodeURIComponent(name) + '/changeActivity', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
