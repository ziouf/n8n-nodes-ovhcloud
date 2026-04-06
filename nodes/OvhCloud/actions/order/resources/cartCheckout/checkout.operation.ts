import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get checkout information and validate cart.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/checkout
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
	];
}

/**
 * Executes the Get Checkout operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const data = (await client.httpGet(`/order/cart/${cartId}/checkout`)) as IDataObject;
	return [{ json: data }];
}
