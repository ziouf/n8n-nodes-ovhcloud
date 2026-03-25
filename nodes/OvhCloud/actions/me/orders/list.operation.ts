import { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
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
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	let qs: { 'date.from'?: string; 'date.to'?: string } = {};
	const dateFrom = this.getNodeParameter('dateFrom', 0, { extractValue: true }) as string;
	if (dateFrom?.length > 0) {
		qs = Object.assign(qs, { 'date.from': dateFrom });
	}
	const dateTo = this.getNodeParameter('dateTo', 0, { extractValue: true }) as string;
	if (dateTo?.length > 0) {
		qs = Object.assign(qs, { 'date.to': dateTo });
	}

	const orderIds = (await client.httpGet(`/me/order`, qs)) as string[];

	const orders = [];
	for (const orderId of orderIds) {
		const order = await executeOrderGet.call(this, orderId);
		orders.push(order);
	}
	return orders;
}

async function executeOrderGet(
	this: IExecuteFunctions,
	orderId: string,
): Promise<INodeExecutionData> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/me/order/${orderId}`)) as IDataObject;
	return { json: data };
}
