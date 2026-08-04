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
			description: 'The phone number to remove from blacklist',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Blacklist entry operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}/blacklists/{number}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const phoneNumber = this.getNodeParameter('phoneNumber', 0) as string;
	await new ApiClient(this).httpDelete(`/sms/${serviceName}/blacklists/${phoneNumber}`);
	return this.helpers.returnJsonArray([{ phoneNumber, unblacklisted: true }]);
}
