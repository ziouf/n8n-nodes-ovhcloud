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
		{
			displayName: 'Configuration ID',
			name: 'configurationId',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Cart Item Configuration operation.
 *
 * HTTP method: PUT
 * Endpoint: /order/cart/{cartId}/item/{itemId}/configuration/{configurationId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const cartId = this.getNodeParameter('cartId', _itemIndex) as string;
	const itemId = this.getNodeParameter('itemId', _itemIndex) as string;
	const configurationId = this.getNodeParameter('configurationId', _itemIndex) as string;

	const data = (await client.httpPut(
		`/order/cart/${cartId}/item/${itemId}/configuration/${configurationId}`,
	)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
