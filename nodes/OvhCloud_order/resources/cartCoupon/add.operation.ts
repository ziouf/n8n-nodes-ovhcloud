import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Add a coupon to a cart.
 *
 * HTTP method: POST
 * Endpoint: /order/cart/{cartId}/coupon
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Cart ID',
			name: 'cartId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the cart',
			displayOptions,
		},
		{
			displayName: 'Coupon Details (JSON)',
			name: 'couponDetails',
			type: 'json',
			default: '{}',
			required: true,
			description: 'Coupon details as a JSON object',
			displayOptions,
		},
	];
}

/**
 * Executes the Add Coupon operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const rawBody = this.getNodeParameter('couponDetails', 0, '{}') as string;
	const body = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
	const data = (await client.httpPost(`/order/cart/${cartId}/coupon`, { body })) as IDataObject;
	return [{ json: data }];
}
