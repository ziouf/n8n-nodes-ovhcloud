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
			displayName: 'Billing Number',
			name: 'billingNumber',
			type: 'string',
			default: '',
			description: 'The number of the bill',
			displayOptions,
		},
	];
}

/**
 * Executes the HistoryRepaymentConsumptionPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/historyRepaymentConsumption
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const billingNumber = this.getNodeParameter('billingNumber', _itemIndex) as string;

	const body: IDataObject = {
		billingNumber: billingNumber,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/historyRepaymentConsumption', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
