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
			description: 'The cart ID to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Cart operation.
 *
 * HTTP method: DELETE
 * Endpoint: /order/cart/{cartId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', itemIndex) as string;

	await client.httpDelete(`/order/cart/${cartId}`);
	return this.helpers.returnJsonArray([{ success: true }]);
}
