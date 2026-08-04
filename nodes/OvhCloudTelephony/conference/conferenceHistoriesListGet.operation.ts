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
			displayName: 'Date Begin.from',
			name: 'dateBegin.from',
			type: 'string',
			default: '',
			description: 'Filter the value of dateBegin property (>=)',
			displayOptions,
		},
		{
			displayName: 'Date Begin.to',
			name: 'dateBegin.to',
			type: 'string',
			default: '',
			description: 'Filter the value of dateBegin property (<=)',
			displayOptions,
		},
	];
}

/**
 * Executes the ConferenceHistories List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/conference/{serviceName}/histories
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const dateBegin_from = this.getNodeParameter('dateBegin.from', itemIndex) as string;
	const dateBegin_to = this.getNodeParameter('dateBegin.to', itemIndex) as string;

	const qs: IDataObject = {
		dateBegin_from: dateBegin_from,
		dateBegin_to: dateBegin_to,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/conference' + '/' + encodeURIComponent(serviceName) + '/histories', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
