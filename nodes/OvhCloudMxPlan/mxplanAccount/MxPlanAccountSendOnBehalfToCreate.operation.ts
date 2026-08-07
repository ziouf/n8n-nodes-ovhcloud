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
					mxPlanOperation: ['MxPlanAccountSendOnBehalfToCreate'],
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
					mxPlanOperation: ['MxPlanAccountSendOnBehalfToCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Allow Account Id',
			name: 'allowAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Account id to allow to send On Behalf To mails from this mailbox',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanAccountSendOnBehalfToCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Allow another user to Send On Behalf To mails from this mailbox
 *
 * HTTP method: POST
 * Endpoint: /email/mxplan/{service}/account/{email}/sendOnBehalfTo
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', 0) as string;
	const service = this.getNodeParameter('service', 0) as string;
	const allowAccountId = this.getNodeParameter('allowAccountId', 0) as any;

	const body: IDataObject = {
		allowAccountId: allowAccountId,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/mxplan/' + encodeURIComponent(service) + '/account/' + encodeURIComponent(email) + '/sendOnBehalfTo', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
