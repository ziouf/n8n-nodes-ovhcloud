import type {
	IDataObject,
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const phoneNumber = this.getNodeParameter('phoneNumber', 0) as string;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${serviceName}/blacklists/${phoneNumber}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
