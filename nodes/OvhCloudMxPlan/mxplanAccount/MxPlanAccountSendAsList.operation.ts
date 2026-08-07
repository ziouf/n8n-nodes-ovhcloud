import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			default: '',
			required: true,
			description: 'Default email for this mailbox',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanAccountSendAsList'],
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
					mxPlanOperation: ['MxPlanAccountSendAsList'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Send as granted users for this mailbox
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{service}/account/{email}/sendAs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', 0) as string;
	const service = this.getNodeParameter('service', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/mxplan/' + encodeURIComponent(service) + '/account/' + encodeURIComponent(email) + '/sendAs')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
