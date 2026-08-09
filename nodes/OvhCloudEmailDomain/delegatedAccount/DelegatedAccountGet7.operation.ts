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
					emailDomainOperation: ['DelegatedAccountGet7'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Delete an existing responder in server
 *
 * HTTP method: DELETE
 * Endpoint: /email/domain/delegatedAccount/{email}/responder
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/email' + '/domain' + '/delegatedAccount/' + encodeURIComponent(email) + '/responder')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
