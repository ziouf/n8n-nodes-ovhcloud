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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const coupon = this.getNodeParameter('coupon', 0) as string;

	const qs: IDataObject = { coupon };

	const data = (await client.httpDelete(`/order/cart/${cartId}/coupon`, qs)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
