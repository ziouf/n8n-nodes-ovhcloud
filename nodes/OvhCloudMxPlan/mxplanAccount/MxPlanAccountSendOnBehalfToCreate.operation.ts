import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Allow Account ID',
			name: 'allowAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'Account ID to allow to send On Behalf To mails from this mailbox',
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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;
	const allowAccountId = this.getNodeParameter('allowAccountId', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		allowAccountId: allowAccountId,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/mxplan/' + encodeURIComponent(service) + '/account/' + encodeURIComponent(email) + '/sendOnBehalfTo', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
