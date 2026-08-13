import type {
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
			displayName: 'Item ID',
			name: 'itemId',
			type: 'string',
			required: true,
			default: '',
			description: 'The item ID to get',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Cart Item operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/item/{itemId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const itemId = this.getNodeParameter('itemId', _itemIndex) as string;

	const data = (await client.httpGet(`/order/cart/${cartId}/item/${itemId}`)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
