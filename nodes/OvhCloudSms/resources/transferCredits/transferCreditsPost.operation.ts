import type {
	IDataObject,
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
				description: 'The internal name of your SMS offer',
				placeholder: 'sms-XXXXXX-1',
			}),
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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const credits = this.getNodeParameter('credits', 0) as number;
	const smsAccountTarget = this.getNodeParameter('smsAccountTarget', 0) as string;
	const body: IDataObject = {};
	body['credits'] = credits;
	body['smsAccountTarget'] = smsAccountTarget;
	const data = (await new ApiClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/transferCredits`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
