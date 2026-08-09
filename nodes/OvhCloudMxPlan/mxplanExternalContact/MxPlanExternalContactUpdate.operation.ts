import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'External Email Address',
			name: 'externalEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'Contact email',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanExternalContactUpdate'],
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
					mxPlanOperation: ['MxPlanExternalContactUpdate'],
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
 * Endpoint: /email/mxplan/{service}/externalContact/{externalEmailAddress}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const externalEmailAddress = this.getNodeParameter('externalEmailAddress', _itemIndex ?? 0) as string;
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		undefined: undefined,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/email' + '/mxplan/' + encodeURIComponent(service) + '/externalContact/' + encodeURIComponent(externalEmailAddress), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
