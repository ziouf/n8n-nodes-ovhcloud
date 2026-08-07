import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain name',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanDomainDisclaimerUpdate'],
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
					mxPlanOperation: ['MxPlanDomainDisclaimerUpdate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Alter this object properties
 *
 * HTTP method: PUT
 * Endpoint: /email/mxplan/{service}/domain/{domainName}/disclaimer
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const service = this.getNodeParameter('service', 0) as string;

	const body: IDataObject = {
		undefined: undefined,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/email' + '/mxplan/' + encodeURIComponent(service) + '/domain/' + encodeURIComponent(domainName) + '/disclaimer', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
