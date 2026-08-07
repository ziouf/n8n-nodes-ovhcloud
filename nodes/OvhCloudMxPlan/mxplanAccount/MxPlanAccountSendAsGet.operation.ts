import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Allowed Account Id',
			name: 'allowedAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Account id to give send as',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanAccountSendAsGet'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			default: '',
			required: true,
			description: 'Default email for this mailbox',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanAccountSendAsGet'],
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
					mxPlanOperation: ['MxPlanAccountSendAsGet'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{service}/account/{email}/sendAs/{allowedAccountId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const allowedAccountId = this.getNodeParameter('allowedAccountId', 0) as any;
	const email = this.getNodeParameter('email', 0) as string;
	const service = this.getNodeParameter('service', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/mxplan/' + encodeURIComponent(service) + '/account/' + encodeURIComponent(email) + '/sendAs/' + encodeURIComponent(allowedAccountId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
