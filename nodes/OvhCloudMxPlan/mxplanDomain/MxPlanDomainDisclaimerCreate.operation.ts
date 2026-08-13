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
					mxPlanOperation: ['MxPlanDomainDisclaimerCreate'],
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
					mxPlanOperation: ['MxPlanDomainDisclaimerCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Content',
			name: 'content',
			type: 'string',
			default: '',
			required: true,
			description: 'Signature, added at the bottom of your organization emails',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanDomainDisclaimerCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Outside Only',
			name: 'outsideOnly',
			type: 'string',
			default: '',
			description: 'Activate the disclaimer only for external emails',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanDomainDisclaimerCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Create organization disclaimer of each email
 *
 * HTTP method: POST
 * Endpoint: /email/mxplan/{service}/domain/{domainName}/disclaimer
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const domainName = this.getNodeParameter('domainName', _itemIndex ?? 0) as string;
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;
	const content = this.getNodeParameter('content', _itemIndex ?? 0) as string;
	const outsideOnly = this.getNodeParameter('outsideOnly', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		content: content,
		outsideOnly: outsideOnly,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/mxplan/' + encodeURIComponent(service) + '/domain/' + encodeURIComponent(domainName) + '/disclaimer', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
