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
					mxPlanOperation: ['MxPlanDomainList'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'State',
			name: 'state',
			type: 'string',
			default: '',
			description: 'Filter the value of state property (=)',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanDomainList'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Domains associated to this service
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{service}/domain
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;
	const state = this.getNodeParameter('state', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
		state: state,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/mxplan/' + encodeURIComponent(service) + '/domain', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
