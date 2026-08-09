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
					emailDomainOperation: ['DomainTaskFilterList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Account',
			name: 'account',
			type: 'string',
			default: '',
			description: 'Account name',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainTaskFilterList'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get filter tasks
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/task/filter
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const account = this.getNodeParameter('account', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
		account: account,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/task' + '/filter', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
