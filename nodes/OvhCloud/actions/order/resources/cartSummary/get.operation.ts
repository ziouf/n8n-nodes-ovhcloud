import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a summary of the current order.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}/summary
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
 * Executes the Get Cart Summary operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;
	const data = (await client.httpGet(`/order/cart/${cartId}/summary`)) as IDataObject;
	return [{ json: data }];
}
