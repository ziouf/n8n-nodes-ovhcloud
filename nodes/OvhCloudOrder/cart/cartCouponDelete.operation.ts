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
			displayName: 'Cart ID',
			name: 'cartId',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Coupon',
			name: 'coupon',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Cart Coupon operation.
 *
 * HTTP method: DELETE
 * Endpoint: /order/cart/{cartId}/coupon
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const coupon = this.getNodeParameter('coupon', _itemIndex) as string;

	const qs: IDataObject = { coupon };

	const data = (await client.httpDelete(`/order/cart/${cartId}/coupon`, qs)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
