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
			default: '',
			description: 'The cart ID (leave empty for list operations)',
			displayOptions,
		},
		{
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '{}',
			description: 'Cart creation body',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Cart operation.
 *
 * HTTP method: POST
 * Endpoint: /order/cart
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', itemIndex ?? 0, '') as string;

	const url = cartId ? `/order/cart/${cartId}` : '/order/cart';
	const body = this.getNodeParameter('body', itemIndex) as IDataObject;

	const data = (await client.httpPost(url, body)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
