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
					emailDomainOperation: ['DomainChangeDnsMXFilterCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Custom Target',
			name: 'customTarget',
			type: 'string',
			default: '',
			description: 'Target server for custom MX',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainChangeDnsMXFilterCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Mx Filter',
			name: 'mxFilter',
			type: 'string',
			default: '',
			required: true,
			description: 'New MX filter',
			displayOptions: {
				show: {
					emailDomainOperation: ['DomainChangeDnsMXFilterCreate'],
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
					emailDomainOperation: ['DomainChangeDnsMXFilterCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Change MX filter, so change MX DNS records
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/changeDnsMXFilter
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;
	const customTarget = this.getNodeParameter('customTarget', _itemIndex ?? 0) as string;
	const mxFilter = this.getNodeParameter('mxFilter', _itemIndex ?? 0) as string;
	const subDomain = this.getNodeParameter('subDomain', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		customTarget: customTarget,
		mxFilter: mxFilter,
		subDomain: subDomain,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/domain/' + encodeURIComponent(domain) + '/changeDnsMXFilter', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
