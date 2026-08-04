import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Billing Account',
			name: 'billingAccount',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of your billingAccount',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Day',
			name: 'day',
			type: 'string',
			default: '',
			required: true,
			description: 'The day of the time condition',
			displayOptions,
		},
		{
			displayName: 'Hour Begin',
			name: 'hourBegin',
			type: 'string',
			default: '',
			required: true,
			description: 'The hour where the time condition begins (format : hhmm)',
			displayOptions,
		},
		{
			displayName: 'Hour End',
			name: 'hourEnd',
			type: 'string',
			default: '',
			required: true,
			description: 'The hour where the time condition ends (format : hhmm)',
			displayOptions,
		},
		{
			displayName: 'Policy',
			name: 'policy',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the TimeConditionConditionPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/timeCondition/{serviceName}/condition
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const day = this.getNodeParameter('day', itemIndex) as string;
	const hourBegin = this.getNodeParameter('hourBegin', itemIndex) as string;
	const hourEnd = this.getNodeParameter('hourEnd', itemIndex) as string;
	const policy = this.getNodeParameter('policy', itemIndex) as string;

	const body: IDataObject = {
		day: day,
		hourBegin: hourBegin,
		hourEnd: hourEnd,
		policy: policy,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/timeCondition' + '/' + encodeURIComponent(serviceName) + '/condition', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
