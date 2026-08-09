import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const orderId = this.getNodeParameter('orderId', _itemIndex) as string;
	const data = (await client.httpGet(`/order/overTheBox/${orderId}`)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
