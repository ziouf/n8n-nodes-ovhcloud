import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanDomainDisclaimerAttributeGet'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your mxplan organization',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanDomainDisclaimerAttributeGet'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get diclaimer attributes to substitute with Active Directory properties
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{service}/domain/{domainName}/disclaimerAttribute
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domainName = this.getNodeParameter('domainName', _itemIndex ?? 0) as string;
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;

	const client = getClient(this);
	const data = (await client.httpGet('/email' + '/mxplan/' + encodeURIComponent(service) + '/domain/' + encodeURIComponent(domainName) + '/disclaimerAttribute')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
