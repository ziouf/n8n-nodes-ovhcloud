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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const body = this.getNodeParameter('body', 0) as IDataObject;

	const data = (await client.httpPost(`/order/cart/${cartId}/coupon`, body)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
