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
			displayOptions,
		},
	];
}

/**
 * Executes the List Cart Item Configurations operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/item/{itemId}/configuration
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', itemIndex) as string;
	const itemId = this.getNodeParameter('itemId', itemIndex) as string;

	const data = (await client.httpGet(
		`/order/cart/${cartId}/item/${itemId}/configuration`,
	)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
