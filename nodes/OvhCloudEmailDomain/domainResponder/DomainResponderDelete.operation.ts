import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account',
			name: 'account',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of account',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainResponderDelete'],
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
					emailDomainOperation: ['DomainResponderDelete'],
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
 * Endpoint: /email/domain/{domain}/responder/{account}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const account = this.getNodeParameter('account', 0) as string;
	const domain = this.getNodeParameter('domain', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/email' + '/domain/' + encodeURIComponent(domain) + '/responder/' + encodeURIComponent(account))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
