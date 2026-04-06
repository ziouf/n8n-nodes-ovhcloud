import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * List all items in a cart.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/item
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
 * Executes the List Cart Items operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const data = (await client.httpGet(`/order/cart/${cartId}/item`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
