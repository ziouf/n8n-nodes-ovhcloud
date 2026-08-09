import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of your domain name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainTaskResponderList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Account',
			name: 'account',
			type: 'string',
			default: '',
			description: 'Name of responder',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainTaskResponderList'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get responder tasks
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/task/responder
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const account = this.getNodeParameter('account', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
		account: account,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/task' + '/responder', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
