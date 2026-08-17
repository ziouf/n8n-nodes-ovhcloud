import { SERVICE_NAME_2 } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME_2,
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
