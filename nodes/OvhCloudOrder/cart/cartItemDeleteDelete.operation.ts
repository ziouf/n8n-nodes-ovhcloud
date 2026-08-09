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
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Item ID',
			name: 'itemId',
			type: 'string',
			required: true,
			default: '',
			description: 'The item ID to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Cart Item operation.
 *
 * HTTP method: DELETE
 * Endpoint: /order/cart/{cartId}/item/{itemId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const itemId = this.getNodeParameter('itemId', _itemIndex) as string;

	await client.httpDelete(`/order/cart/${cartId}/item/${itemId}`);
	return this.helpers.returnJsonArray([{ success: true }]);
}
