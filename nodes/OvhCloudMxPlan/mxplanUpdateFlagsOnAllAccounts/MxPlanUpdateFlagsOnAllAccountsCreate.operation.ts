import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your mxplan organization',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanUpdateFlagsOnAllAccountsCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Update spam and virus flags on all active accounts
 *
 * HTTP method: POST
 * Endpoint: /email/mxplan/{service}/updateFlagsOnAllAccounts
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/mxplan/' + encodeURIComponent(service) + '/updateFlagsOnAllAccounts')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
