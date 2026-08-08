import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getSmsServices',
				displayName: 'Service Name',
				description: 'The SMS service name',
				placeholder: 'sms-XXXXXX-1',
			}),
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
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const phoneNumber = this.getNodeParameter('phoneNumber', 0) as string;
	await new ApiClient(this).httpDelete(`/sms/${serviceName}/blacklists/${phoneNumber}`);
	return this.helpers.returnJsonArray([{ phoneNumber, unblacklisted: true }]);
}
