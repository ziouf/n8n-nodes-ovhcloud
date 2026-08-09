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
			displayName: 'Item ID',
			name: 'itemId',
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
			description: 'Configuration creation body',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Cart Item Configuration operation.
 *
 * HTTP method: POST
 * Endpoint: /order/cart/{cartId}/item/{itemId}/configuration
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const itemId = this.getNodeParameter('itemId', _itemIndex) as string;
	const body = this.getNodeParameter('body', _itemIndex) as IDataObject;

	const data = (await client.httpPost(
		`/order/cart/${cartId}/item/${itemId}/configuration`,
		body,
	)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
