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
			displayName: 'Cart ID',
			name: 'cartId',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '{}',
			description: 'Coupon creation body',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Cart Coupon operation.
 *
 * HTTP method: POST
 * Endpoint: /order/cart/{cartId}/coupon
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const body = this.getNodeParameter('body', _itemIndex) as IDataObject;

	const data = (await client.httpPost(`/order/cart/${cartId}/coupon`, body)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
