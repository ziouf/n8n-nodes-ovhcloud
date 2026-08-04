import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The SMS service name',
			displayOptions,
		},
		{
			displayName: 'Phone Number',
			name: 'phoneNumber',
			type: 'string',
			default: '',
			required: true,
			description: 'The phone number to add to blacklist',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Blacklist entry operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/blacklists
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const phoneNumber = this.getNodeParameter('phoneNumber', 0) as string;
	await new ApiClient(this).httpPost(`/sms/${serviceName}/blacklists`, { phoneNumber });
	return this.helpers.returnJsonArray([{ phoneNumber, blacklisted: true }]);
}
