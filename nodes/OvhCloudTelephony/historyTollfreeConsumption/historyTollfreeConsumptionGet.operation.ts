import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
 * Executes the HistoryTollfreeConsumptionGet operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/historyTollfreeConsumption/{date}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const date = this.getNodeParameter('date', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/historyTollfreeConsumption' + '/' + encodeURIComponent(date))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
