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
			description: 'The cart ID to update',
			displayOptions,
		},
		{
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '{}',
			description: 'Cart update body',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Cart operation.
 *
 * HTTP method: PUT
 * Endpoint: /order/cart/{cartId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const body = this.getNodeParameter('body', _itemIndex) as IDataObject;

	const data = (await client.httpPut(`/order/cart/${cartId}`, body)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
