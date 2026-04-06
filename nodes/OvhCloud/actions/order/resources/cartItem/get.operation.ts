import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get information about a specific cart item.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/item/{itemId}
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
			displayName: 'Item ID',
			name: 'itemId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the cart item',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Cart Item operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const itemId = this.getNodeParameter('itemId', 0) as string;
	const data = (await client.httpGet(`/order/cart/${cartId}/item/${itemId}`)) as IDataObject;
	return [{ json: data }];
}
