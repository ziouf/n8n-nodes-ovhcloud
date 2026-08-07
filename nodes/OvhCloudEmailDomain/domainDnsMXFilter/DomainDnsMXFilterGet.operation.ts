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
					emailDomainOperation: ['DomainDnsMXFilterGet'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'Sub domain',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainDnsMXFilterGet'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Domain MX filter
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/dnsMXFilter
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', 0) as string;
	const subDomain = this.getNodeParameter('subDomain', 0) as string;

	const qs: IDataObject = {
		subDomain: subDomain,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/dnsMXFilter', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
