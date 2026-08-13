import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
					emailDomainOperation: ['DomainRedirectionList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'From',
			name: 'from',
			type: 'string',
			default: '',
			description: 'Name of redirection',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainRedirectionList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'string',
			default: '',
			description: 'Email of redirection target',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainRedirectionList'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get redirections
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/redirection
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const from = this.getNodeParameter('from', _itemIndex ?? 0) as string;
	const to = this.getNodeParameter('to', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
		from: from,
		to: to,
	};

	const client = getClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/redirection', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
