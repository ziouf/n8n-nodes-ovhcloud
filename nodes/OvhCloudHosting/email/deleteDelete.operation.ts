import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Email Address',
			name: 'emailAddress',
			type: 'string',
			default: '',
			required: true,
		},
	];
}

/**
 * Delete an email account
 *
 * HTTP method: DELETE
 * Endpoint: /hosting/web/{serviceName}/email/{emailAddress}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const emailAddress = this.getNodeParameter('emailAddress', 0) as string;
	await client.httpDelete(`/hosting/web/${serviceName}/email/${emailAddress}`);
	return this.helpers.returnJsonArray([{ success: true }]);
}
