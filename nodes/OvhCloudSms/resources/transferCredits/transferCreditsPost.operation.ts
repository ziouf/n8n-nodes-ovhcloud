import { SERVICE_NAME } from '../../serviceName';
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
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Credits',
			name: 'credits',
			type: 'number',
			default: 0,
			required: true,
			description: 'Amount of credits to transfer',
			displayOptions,
		},
		{
			displayName: 'SMS Account Target',
			name: 'smsAccountTarget',
			type: 'string',
			default: '',
			required: true,
			description: 'Sms account destination',
			displayOptions,
		},
	];
}

/**
 * Executes the Post /sms/{serviceName}/transferCredits operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/transferCredits
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const credits = this.getNodeParameter('credits', _itemIndex ?? 0) as number;
	const smsAccountTarget = this.getNodeParameter('smsAccountTarget', _itemIndex ?? 0) as string;
	const body: IDataObject = {};
	body['credits'] = credits;
	body['smsAccountTarget'] = smsAccountTarget;
	const data = (await getClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/transferCredits`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
