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
			description: 'The cart ID to assign',
			displayOptions,
		},
	];
}

/**
 * Executes the Assign Cart operation.
 *
 * HTTP method: POST
 * Endpoint: /order/cart/{cartId}/assign
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;

	const data = (await client.httpPost(`/order/cart/${cartId}/assign`)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
