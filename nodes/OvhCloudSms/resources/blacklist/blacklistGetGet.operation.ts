import type {
	IDataObject,
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
			description: 'The phone number to check',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Blacklist entry operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/blacklists/{number}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const phoneNumber = this.getNodeParameter('phoneNumber', _itemIndex ?? 0) as string;
	const data = (await getClient(this).httpGet(
		`/sms/${serviceName}/blacklists/${phoneNumber}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
