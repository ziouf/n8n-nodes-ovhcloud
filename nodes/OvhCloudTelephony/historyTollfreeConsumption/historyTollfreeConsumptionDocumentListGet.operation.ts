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
			displayName: 'Date',
			name: 'date',
			type: 'string',
			default: '',
			required: true,
			description: 'Date of the bill',
			displayOptions,
		},
	];
}

/**
 * Executes the HistoryTollfreeConsumptionDocument List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/historyTollfreeConsumption/{date}/document
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const date = this.getNodeParameter('date', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/historyTollfreeConsumption' + '/' + encodeURIComponent(date) + '/document')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
