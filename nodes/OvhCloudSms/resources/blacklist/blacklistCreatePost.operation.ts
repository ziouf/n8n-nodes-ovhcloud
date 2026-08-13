import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const phoneNumber = this.getNodeParameter('phoneNumber', _itemIndex ?? 0) as string;
	await getClient(this).httpPost(`/sms/${serviceName}/blacklists`, { phoneNumber });
	return this.helpers.returnJsonArray([{ phoneNumber, blacklisted: true }]);
}
