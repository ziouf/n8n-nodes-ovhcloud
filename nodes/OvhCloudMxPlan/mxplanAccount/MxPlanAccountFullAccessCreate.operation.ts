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
					mxPlanOperation: ['MxPlanAccountFullAccessCreate'],
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
					mxPlanOperation: ['MxPlanAccountFullAccessCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Allowed Account ID',
			name: 'allowedAccountId',
			type: 'string',
			default: '',
			required: true,
			description: 'User to give full access',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanAccountFullAccessCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Allow full access to a user
 *
 * HTTP method: POST
 * Endpoint: /email/mxplan/{service}/account/{email}/fullAccess
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', _itemIndex ?? 0) as string;
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;
	const allowedAccountId = this.getNodeParameter('allowedAccountId', _itemIndex ?? 0) as string;

	const body: IDataObject = {
		allowedAccountId: allowedAccountId,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/mxplan/' + encodeURIComponent(service) + '/account/' + encodeURIComponent(email) + '/fullAccess', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
