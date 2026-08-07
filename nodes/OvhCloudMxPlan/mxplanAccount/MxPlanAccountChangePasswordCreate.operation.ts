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
					mxPlanOperation: ['MxPlanAccountChangePasswordCreate'],
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
					mxPlanOperation: ['MxPlanAccountChangePasswordCreate'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			default: '',
			required: true,
			description: 'new password',
			typeOptions: {"password":true},
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanAccountChangePasswordCreate'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Change mailbox password
 *
 * HTTP method: POST
 * Endpoint: /email/mxplan/{service}/account/{email}/changePassword
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', 0) as string;
	const service = this.getNodeParameter('service', 0) as string;
	const password = this.getNodeParameter('password', 0) as string;

	const body: IDataObject = {
		password: password,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/mxplan/' + encodeURIComponent(service) + '/account/' + encodeURIComponent(email) + '/changePassword', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
