import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			description: 'Default email for this mailbox',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanAccountCapabilitiesGet'],
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
					mxPlanOperation: ['MxPlanAccountCapabilitiesGet'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get available capabilities for this account
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{service}/account/{email}/capabilities
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/mxplan/' + encodeURIComponent(service) + '/account/' + encodeURIComponent(email) + '/capabilities')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
