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
			description: 'The date parameter',
			displayOptions,
		},
		{
			displayName: 'Extension',
			name: 'extension',
			type: 'string',
			default: '',
			required: true,
			description: 'Document suffix',
			displayOptions,
		},
	];
}

/**
 * Executes the HistoryConsumptionFile List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/historyConsumption/{date}/file
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const date = this.getNodeParameter('date', _itemIndex) as string;
	const extension = this.getNodeParameter('extension', _itemIndex) as string;

	const qs: IDataObject = {
		extension: extension,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/historyConsumption' + '/' + encodeURIComponent(date) + '/file', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
