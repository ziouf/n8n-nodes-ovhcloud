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
					mxPlanOperation: ['MxPlanAccountList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			description: 'Filter the value of ID property (like)',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanAccountList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Primary Email Address',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			description: 'Filter the value of primaryEmailAddress property (like)',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanAccountList'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Accounts associated to this mxplan service
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{service}/account
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
		id: id,
		primaryEmailAddress: primaryEmailAddress,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/mxplan/' + encodeURIComponent(service) + '/account', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
