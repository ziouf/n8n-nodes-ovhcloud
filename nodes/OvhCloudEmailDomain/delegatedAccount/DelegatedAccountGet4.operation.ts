/* eslint-disable n8n-nodes-base/node-param-type-options-password-missing */
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
					emailDomainOperation: ['DelegatedAccountGet4'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			default: '',
			required: true,
			description: 'New password',
			typeOptions: {"password":true},
			displayOptions: {
				show: {
					emailDomainOperation: ['DelegatedAccountGet4'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Change mailbox password (length : [9;30], no space at begin and end, no accent)
 *
 * HTTP method: POST
 * Endpoint: /email/domain/delegatedAccount/{email}/changePassword
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;
	const password = this.getNodeParameter('password', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		password: password,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/domain' + '/delegatedAccount/' + encodeURIComponent(email) + '/changePassword', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
