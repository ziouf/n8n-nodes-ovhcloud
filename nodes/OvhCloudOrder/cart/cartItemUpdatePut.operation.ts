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
			description: 'The item ID to update',
			displayOptions,
		},
		{
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '{}',
			description: 'Item update body',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Cart Item operation.
 *
 * HTTP method: PUT
 * Endpoint: /order/cart/{cartId}/item/{itemId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const itemId = this.getNodeParameter('itemId', 0) as string;
	const body = this.getNodeParameter('body', 0) as IDataObject;

	const data = (await client.httpPut(
		`/order/cart/${cartId}/item/${itemId}`,
		body,
	)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
