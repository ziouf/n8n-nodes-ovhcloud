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
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '{}',
			description: 'Support creation body',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Cart Support operation.
 *
 * HTTP method: POST
 * Endpoint: /order/cart/{cartId}/support
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', itemIndex) as string;
	const body = this.getNodeParameter('body', itemIndex) as IDataObject;

	const data = (await client.httpPost(`/order/cart/${cartId}/support`, body)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
