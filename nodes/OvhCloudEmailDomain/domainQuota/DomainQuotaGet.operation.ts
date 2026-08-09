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
					emailDomainOperation: ['DomainQuotaGet'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * List all quotas for this domain
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/quota
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/quota')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
