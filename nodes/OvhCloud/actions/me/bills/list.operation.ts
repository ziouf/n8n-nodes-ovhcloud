import type { INodeExecutionData, IDataObject, IDisplayOptions } from 'n8n-workflow';
import { IExecuteFunctions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Category',
			name: 'billCategory',
			description: 'Filter bills by category',
			type: 'options',
			options: [
				{ name: 'All', value: '' },
				{ name: 'Autorenew', value: 'autorenew' },
				{ name: 'Earlyrenewal', value: 'earlyrenewal' },
				{ name: 'Purchase', value: 'purchase' },
				{ name: 'Purchase Cloud', value: 'purchase-cloud' },
				{ name: 'Purchase Servers', value: 'purchase-servers' },
				{ name: 'Purchase Telecom', value: 'purchase-telecom' },
				{ name: 'Purchase Web', value: 'purchase-web' },
			],
			default: '',
			displayOptions,
		},
		{
			displayName: 'Order ID',
			name: 'billOrderId',
			type: 'number',
			default: 0,
			description: 'Filter bills related to this order ID',
			displayOptions,
		},
		{
			displayName: 'Date From',
			name: 'dateFrom',
			type: 'dateTime',
			default: null,
			description: 'Filter from this date (inclusive)',
			displayOptions,
		},
		{
			displayName: 'Date To',
			name: 'dateTo',
			type: 'dateTime',
			default: null,
			description: 'Filter up to this date (inclusive)',
			displayOptions,
		},
	];
};

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	let qs: { category?: string; 'date.from'?: string; 'date.to'?: string; orderId?: number } = {};
	const category = this.getNodeParameter('billCategory', 0, { extractValue: true }) as string;
	if (category?.length > 0) {
		qs = Object.assign(qs, { category });
	}
	const dateFrom = this.getNodeParameter('dateFrom', 0, { extractValue: true }) as string;
	if (dateFrom?.length > 0) {
		qs = Object.assign(qs, { 'date.from': dateFrom });
	}
	const dateTo = this.getNodeParameter('dateTo', 0, { extractValue: true }) as string;
	if (dateTo?.length > 0) {
		qs = Object.assign(qs, { 'date.to': dateTo });
	}
	const orderId = this.getNodeParameter('billOrderId', 0, { extractValue: true }) as number;
	if (orderId > 0) {
		qs = Object.assign(qs, { orderId });
	}

	const billIDs = (await client.httpGet(`/me/bill`, qs)) as string[];
	const bills: INodeExecutionData[] = [];

	for (const billID of billIDs) {
		const bill = await executeBillGet.call(this, billID);
		bills.push(bill);
	}

	return bills;
}

async function executeBillGet(
	this: IExecuteFunctions,
	billID: string,
): Promise<INodeExecutionData> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/me/bill/${billID}`)) as IDataObject;
	return { json: data };
}
