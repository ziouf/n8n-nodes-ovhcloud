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
					emailDomainOperation: ['DomainDnsMXRecordsGet'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainDnsMXRecordsGet'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Domain MX records
 *
 * HTTP method: GET
 * Endpoint: /email/domain/{domain}/dnsMXRecords
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', 0) as string;
	const subDomain = this.getNodeParameter('subDomain', 0) as string;

	const qs: IDataObject = {
		subDomain: subDomain,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain/' + encodeURIComponent(domain) + '/dnsMXRecords', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
