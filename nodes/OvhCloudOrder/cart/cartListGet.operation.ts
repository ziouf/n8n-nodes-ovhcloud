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
			displayName: 'Cart ID',
			name: 'cartId',
			type: 'string',
			default: '',
			description: 'The cart ID (leave empty for list operations)',
			displayOptions,
		},
	];
}

/**
 * Executes the List Carts operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart
 */
 
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex, '') as string;

	const url = cartId ? `/order/cart/${cartId}` : '/order/cart';
	const data = (await client.httpGet(url)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
