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
			description: 'The cart ID to get',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Cart operation.
 *
 * HTTP method: GET
 * Endpoint: /order/cart/{cartId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', 0) as string;

	const data = (await client.httpGet(`/order/cart/${cartId}`)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
